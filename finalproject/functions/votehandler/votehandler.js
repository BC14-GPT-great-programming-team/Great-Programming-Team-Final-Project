//this is the vote handler function that will work on the server

const{createClient} = require('@supabase/supabase-js')

exports.handler = async function (event, context) {
    try {
        const supabase = createClient(
          process.env.REACT_APP_SUPABASE_URL,
          process.env.REACT_APP_SUPABASE_KEY
          );


        const requestBody = JSON.parse(event.body);

        if (!requestBody) {return {
          statusCode: 200,
          headers: { "Content-Type": "application/json"},
          message: 'No request type specified',
      };}

        else if (requestBody.type === "createUser")  {

        const {data, error}= await supabase
        .from('users')
        .insert({username:requestBody.username})
        .single()
        .select();

        if (error) {
            console.error('Supabase error:', error);
            return {
              statusCode: 500,
              body: JSON.stringify({ error: 'Something went wrong with Supabase' }),
            };
          }

          const responseData = {
            message: 'New user created',
            user_id:data.user_id,
          };

        return {
            statusCode: 200,
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(responseData),
        };
    } else if (requestBody.type === "createGroup") {
      
        const {data, error}= await supabase
        .from('groups')
        .insert({group_name:requestBody.group_name, created_by:requestBody.user_id})
        .single()
        .select();

        if (error) {
            console.error('Supabase error:', error);
            return {
              statusCode: 500,
              body: JSON.stringify({ error: 'Something went wrong with Supabase' }),
            };
          }

          const responseData = {
            message: 'New group created',
            group_id:data.group_id,
            created_by:data.created_by,
            group_name:data.group_name,
          };

        return {
            statusCode: 200,
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(responseData),
        };

    } else if (requestBody.type === "assignUser") {
      
      const {data, error} = await supabase
      .from('users')
      .update({group_id:requestBody.group_id})
      .eq('user_id', requestBody.user_id)
      .single()
      .select();

      if (error) {
        console.error('Supabase error:', error);
        return {
          statusCode: 500,
          body: JSON.stringify({ error: 'Something went wrong with Supabase' }),
        };
      }

      const responseData = {
        message: 'User assigned to group',
        group_id:data.group_id,
        user_id:data.user_id,
        group_name:data.group_name,
      };

      return {
        statusCode: 200,
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify(responseData),
    };


    } 


     else if (requestBody.type === "getGroupName") {
      
      const {data, error} = await supabase
      .from('groups')
      .select("group_name")
      .eq('group_id', requestBody.group_id)
      .single()
      .select();

      if (error) {
        console.error('Supabase error:', error);
        return {
          statusCode: 500,
          body: JSON.stringify({ error: 'Something went wrong with Supabase' }),
        };
      }

      const responseData = {
        message: 'here is the group name',
        group_name:data.group_name,
        group_id:data.group_id,
      };

      return {
        statusCode: 200,
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify(responseData),
    };


    } 
    
    else if (requestBody.type === "getGroupMembers") {
      
      const {data, error}= await supabase
      .from('users')
      .select("user_name")
      .eq('group_id', requestBody.group_id)
      .select();

      if (error) {
          console.error('Supabase error:', error);
          return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Something went wrong with Supabase' }),
          };
        }

        const usernames = data.map((user) => user.username);

        const responseData = {
          message: 'Group members retrieved',
          usernames:usernames,
        };

      return {
          statusCode: 200,
          headers: { "Content-Type": "application/json"},
          body: JSON.stringify(responseData),
      };

  } 
  //paste below here
  else if (requestBody.type === "castVote") {
      
    const {data, error}= await supabase
    .from('votes')
    .insert({group_id:requestBody.group_id, 
             user_id:requestBody.user_id,
            vote_rank:requestBody.vote_rank,
          vote_stage:requestBody.vote_stage,
        vote_choice:requestBody.vote_choice,
      round_label:requestBody.round_label})
    .single()
    .select();

    if (error) {
        console.error('Supabase error:', error);
        return {
          statusCode: 500,
          body: JSON.stringify({ error: 'Something went wrong with Supabase' }),
        };
      }

      const responseData = {
        message: 'vote recieved',
        voteid:data.id,
      };

    return {
        statusCode: 200,
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify(responseData),
    };

}  else if (requestBody.type === "getVotes") {
      
  const {data, error} = await supabase
      .from('votes')
      .select("vote_rank")
      .eq('group_id', requestBody.group_id)
      .eq('vote_stage', requestBody.vote_stage)
      .select();

      if (error) {
          console.error('Supabase error:', error);
          return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Something went wrong with Supabase' }),
          };
        }

        
        const votechoices = data.map((vote) => vote.vote_choice);
        const roundlabels = data.map((vote) => vote.round_label);
        const roundlabel = roundlabels[0];
        const uniquechoices = [...new Set(votechoices)];
        const resultArray = uniquechoices.map((choice) => ({
         choice: choice,
         votes:0,
       }));
       data.forEach((vote) => {
         const index = resultArray.findIndex((result) => result.choice === vote.vote_choice);
         resultArray[index].votes++;
       });

       const winningChoice = resultArray.reduce((prev, current) => {
         return (prev.votes > current.votes) ? prev : current;
       });

       const responseData = {
         message: 'Group votes retrieved',
         resultArray:resultArray,
         winningChoice:winningChoice,
         roundlabel:roundlabel,
        
          // usernames:usernames,
        };

      return {
          statusCode: 200,
          headers: { "Content-Type": "application/json"},
          body: JSON.stringify(responseData),
      };

} 

else if (requestBody.type === "purgeGroupVotes") {
      
  const {data, error} = await supabase
      .from('votes')
      .delete()
      .eq('group_id', requestBody.group_id)
      .select();

      if (error) {
          console.error('Supabase error:', error);
          return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Something went wrong with Supabase' }),
          };
        }

       const responseData = {
         message: 'Group votes deleted',
         group_id:data.group_id,
        };

      return {
          statusCode: 200,
          headers: { "Content-Type": "application/json"},
          body: JSON.stringify(responseData),
      };

} 
else if (requestBody.type === "purgeUserVotes") {
      
  const {data, error} = await supabase
      .from('votes')
      .delete()
      .eq('user_id', requestBody.user_id)
      .select();

      if (error) {
          console.error('Supabase error:', error);
          return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Something went wrong with Supabase' }),
          };
        }

       const responseData = {
         message: 'User votes deleted',
         user_id:data.group_id,
        };

      return {
          statusCode: 200,
          headers: { "Content-Type": "application/json"},
          body: JSON.stringify(responseData),
      };

} 

else if (requestBody.type === "purgeUser") {
      
  const {data:userData, error:userError} = await supabase
      .from('users')
      .delete()
      .eq('user_id', requestBody.user_id)

      if (userError) {
          console.error('Supabase error:', userError);
          return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Something went wrong with Supabase' }),
          };
        }

       const responseData = {
         message: 'User deleted',
         user_id:userData.user_id,
        };

      return {
          statusCode: 200,
          headers: { "Content-Type": "application/json"},
          body: JSON.stringify(responseData),
      };

} 
else if (requestBody.type === "purgeGroup") {
      
  const {data:groupData, error:groupError} = await supabase
      .from('groups')
      .delete()
      .eq('group_id', requestBody.group_id)

      if (groupError) {
          console.error('Supabase error:', groupError);
          return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Something went wrong with Supabase' }),
          };
        }

       const responseData = {
         message: 'Group deleted',
         group_id:groupData.group_id,
        };

      return {
          statusCode: 200,
          headers: { "Content-Type": "application/json"},
          body: JSON.stringify(responseData),
      };

} 
  //paste above here
  else { 
      return {
        statusCode: 400,
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify({ error: 'Invalid request type' }),
    };
    }
    
  }
    catch (error) {
        console.error(`Error occurred`, error);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: `Something went wrong` }),
        };
    }
};