//this is the vote handler function that will work on the server

const{createClient} = require('@supabase/supabase-js')

exports.handler = async function (event, context) {
    try {
        const supabase = createClient(process.env.REACT_APP_SUPABASE_URL,process.env.REACT_APP_SUPABASE_KEY)
        const {data, error}= await supabase.from('users').select('*')

        if (error) {
            console.error('Supabase error:', error);
            return {
              statusCode: 500,
              body: JSON.stringify({ error: 'Something went wrong with Supabase' }),
            };
          }

          const testData = {
            message: 'Hello from the serverless function',
            data,
          };

        return {
            statusCode: 200,
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(testData),
        };
    } catch (error) {
        console.error(`Error occurred`, error);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: `Something went wrong` }),
        };
    }
};