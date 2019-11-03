const requestHandler = (request, response) => {
    const url = request.url;
    const method = request.method;

    if (url === '/' && method === 'GET') {
        response.write('<html>');
        response.write('<head><title>Schwarzmuellers NodeJS Assignment</title><head>');
        response.write('<body><h1>Howdy partner. Maximo here, welcome to my assignment.</h1><h2>Fill out the form bellow to add a new user.</h2><form action="/create-user" method="POST"><input type="text" name="message"><button type="submit">Create a new user</button></form></body>');
        response.write('</html>');
        return response.end();
    } else if (url === '/users' && method === 'GET') {
        response.write('<html>');
        response.write('<head><title>Schwarzmuellers NodeJS Assignment</title><head>');
        response.write('<body><ul><li>User One</li><li>User Two</li><li>User Nine Thousand</li></ul></body>');
        response.write('</html>');
        return response.end();
    } else if (url === '/create-user' && method === 'POST') {
        const requestBody = [];
        request.on('data', (dataChunk) => {
            requestBody.push(dataChunk);
        });
        request.on('end', () => {
            const parsedRequestBody = Buffer.concat(requestBody).toString();
            const newUserName = parsedRequestBody.split('=')[1];
            console.log(newUserName);
            response.statusCode = 302;
            response.setHeader('Location', '/');
            return response.end();
        });
    }
};

module.exports = requestHandler;