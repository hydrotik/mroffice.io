'use strict';
const Config = require('../../config');
const Joi = require('joi');
const helper = require('sendgrid').mail;
const sg = require('sendgrid')(process.env.SENDGRID_API_KEY);


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


            const fromEmail = new helper.Email('"' + request.payload.name + '" <' + request.payload.email + '>');
            const toEmail = new helper.Email(toAddress);
            const subject = Config.get('/projectName') + ' contact form';
            const content = new helper.Content('text/plain', request.payload.message);

            const mail = new helper.Mail(fromEmail, subject, toEmail, content);

            const sgrequest = sg.emptyRequest({
              method: 'POST',
              path: '/v3/mail/send',
              body: mail.toJSON()
            });

            sg.API(sgrequest, function (error, response) {
              if (error) {
                console.log('Error response received');
              }
              console.log(response.statusCode);
              console.log(response.body);
              console.log(response.headers);

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
