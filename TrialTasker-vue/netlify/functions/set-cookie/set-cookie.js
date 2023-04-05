// Docs on event and context https://docs.netlify.com/functions/build/#code-your-function-2
var cookie = require('cookie');
// configuration of set-cookie
exports.handler = async (event, context) => {
  try {
    // get the cookie from the request
    const cookies = cookie.parse(event.headers.cookie || '');
    // set the cookie
    const response = {
      statusCode: 200,
      headers: {
        'Set-Cookie': cookie.serialize('my-cookie', 'my-cookie-value', {
          httpOnly: true,
          secure: true,
          sameSite: 'strict',
          maxAge: 3600,
          path: '/',
        }),
        'Cache-Control': 'no-cache',
      },
      body: JSON.stringify({ message: 'Cookie set!' }),
    };
    return response;
  } catch (err) {
    return { statusCode: 500, body: err.toString() };
  }
};


