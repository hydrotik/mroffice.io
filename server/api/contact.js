'use strict';
const Config = require('../../config');
const Joi = require('joi');
const nodemailer = require('nodemailer');


const internals = {};


exports.register = function (server, options, next) {

    server.route({
        method: 'POST',
        path: '/contact',
        config: {
            validate: {
                payload: {
                    name: Joi.string().required().label('Name'),
                    email: Joi.string().email().required().label('Email'),
                    message: Joi.string().required().label('Message'),
                    phone: Joi.string().empty('')
                }
            }
        },
        handler: function (request, reply) {
            console.log('name: ' + request.payload.name);
            console.log('email: ' + request.payload.email);
            console.log('message: ' + request.payload.message);
            console.log('phone: ' + request.payload.phone);

            const toAddress = (process.env.MAILTO_VARIABLE) ? process.env.MAILTO_VARIABLE : Config.get('/system/toAddress');
            const subject = Config.get('/projectName') + ' contact form on ';

            let transporter = nodemailer.createTransport({
                host: 'smtp.sendgrid.net',
                port: '587',
                secure: false, // secure:true for port 465, secure:false for port 587
                auth: {
                    user: process.env.SENDGRID_USERNAME,
                    pass: process.env.SENDGRID_PASSWORD,
                }
            });

            // setup email data with unicode symbols
            let mailOptions = {
                from: '"' + request.payload.name + '" <' + request.payload.email + '>', // sender address
                to: toAddress, // list of receivers
                subject: subject, // Subject line
                text: request.payload.message, // plain text body
                html: '<b>'+request.payload.message+'</b>' // html body
            };

            // send mail with defined transport object
            transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                    console.log(error);
                    return reply(error);
                }
                console.log('Message %s sent: %s', info.messageId, info.response);
                reply({ success: true });
            });
            
        }
    });


    next();
};


/*
internals.applyRoutes = function (server, next) {

    server.route({
        method: 'POST',
        path: '/contact',
        config: {
            validate: {
                payload: {
                    mailinglist: Joi.string().required(),
                    email: Joi.string().email().required(),
                    message: Joi.string().required(),
                    phone: Joi.string()
                }
            }
        },
        handler: function (request, reply) {
            console.log(request.payload.email);
            console.log(request.payload.message);
            console.log(request.payload.mailinglist);
            console.log(request.payload.phone);

            /~*
            const mailer = server.plugins.mailer;
            const emailOptions = {
                subject: Config.get('/projectName') + ' contact form',
                to: Config.get('/system/toAddress'),
                replyTo: {
                    name: request.payload.name,
                    address: request.payload.email
                }
            };
            const template = 'contact';

            mailer.sendEmail(emailOptions, template, request.payload, (err, info) => {

                if (err) {
                    return reply(err);
                }

                reply({ success: true });
            });
            *~/
        }
    });


    next();
};


exports.register = function (server, options, next) {

    //server.dependency('mailer', internals.applyRoutes);

    next();
};
*/

exports.register.attributes = {
    name: 'contact'
};
