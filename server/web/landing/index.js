'use strict';


exports.register = function (server, options, next) {

    server.route({
        method: 'GET',
        path: '/',
        handler: function (request, reply) {

            return reply.view('landing/index');
        }
    });


    next();
};

exports.register.attributes = {
    name: 'web/landing'
};
