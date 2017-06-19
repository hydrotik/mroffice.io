'use strict';
const Composer = require('./index');

const ENV = require('dotenv').config()


Composer((err, server) => {

    if (err) {
        throw err;
    }

    server.start(() => {

        console.log('Started the plot device on port ' + server.info.port);
    });
});
