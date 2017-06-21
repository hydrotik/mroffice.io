'use strict';
const Async = require('async');
const Boom = require('boom');
const Config = require('../config');


const internals = {};


internals.applyStrategy = function (server, next) {

    // const Session = server.plugins['hapi-mongo-models'].Session;
    // const User = server.plugins['hapi-mongo-models'].User;

    server.auth.strategy('cookie', {
        password: Config.get('/cookieSecret'),
        cookie: 'sid-aqua',
        isSecure: false
    });


    next();
};



exports.register = function (server, options, next) {

    //server.dependency('hapi-mongo-models', internals.applyStrategy);

    next();
};


//exports.preware = internals.preware;


exports.register.attributes = {
    name: 'auth'
};
