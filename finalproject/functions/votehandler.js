exports.handler = async function (event, context) {
    try {
        //put our function here later

        return {
            statusCode: 200,
            body: JSON.stringify({ message: "Hello from the serverless function" }),
        };
    } catch (error) {
        console.error(`Error occurred`, error);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: `Something went wrong` }),
        };
    }
}