//this is the vote handler function that will work on the server

exports.handler = async function (event, context) {
    try {
        const data = {message: "Hello from the serverless function"};

        return {
            statusCode: 200,
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(data),
        };
    } catch (error) {
        console.error(`Error occurred`, error);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: `Something went wrong` }),
        };
    }
};