exports.handler = async (event, context) => {
  try {
    const name = event.queryStringParameters?.name || 'World';
    return {
      statusCode: 200,
      body: JSON.stringify({ message: `Hello, ${name}!` }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Internal Server Error' }),
    };
  }
};