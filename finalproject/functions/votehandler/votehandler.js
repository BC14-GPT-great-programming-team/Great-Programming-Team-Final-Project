//this is the vote handler function that will work on the server

const{createClient} = require('@supabase/supabase-js')

exports.handler = async function (event, context) {
    try {
        const supabase = createClient(
          process.env.REACT_APP_SUPABASE_URL,
          process.env.REACT_APP_SUPABASE_KEY
          );


        const requestBody = JSON.parse(event.body);

        if (requestBody.type === "createUser")  {

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

  } else { 
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