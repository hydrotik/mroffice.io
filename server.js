'use strict';

const Hapi = require('hapi');

// Create a server with a host and port
const server = new Hapi.Server();
server.connection({ 
    host: 'localhost', 
    port: 8000 
});

// Routes

server.route({
    method: 'GET',
    path: '/',
    handler: function (request, reply) {
        reply('Hello, Mr. World!');
    }
});


server.route({
    method: 'GET',
    path: '/{name}',
    handler: function (request, reply) {
        reply('Hello, Mr. ' + encodeURIComponent(capitalizeFirstLetter(request.params.name)) + '!');
    }
});

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

// Start the server
server.start((err) => {

    if (err) {
        throw err;
    }
    console.log('Server running at:', server.info.uri);
});