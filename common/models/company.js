'use strict';
var loopback = require('loopback');
var app = require('../../server/server');
var path = require('path');

module.exports = function (Company) {

    Company.beforeRemote('login', function (ctx, user, next) {
        var self = this;
        let email = ctx.args.credentials.email;
        Company.findOne({ where: { "email": email } }, function (err, company) {
            let defaultError = new Error('login failed');
            defaultError.statusCode = 401;
            defaultError.code = 'LOGIN_FAILED';
            if (err) {
                debug('An error is reported from User.findOne: %j', err);
                next(defaultError);
            } else {
                if (!company.activated) {
                    let errActive = new Error('The company has not been verified');
                    errActive.statusCode = 409;
                    errActive.code = 'LOGIN_FAILED_COMPANY_NOT_VERIFIED';
                    next(errActive);
                } else {
                    next();
                }
            }
        })
    })

    Company.confirmByAdmin = function (email, fn) {
        fn = fn || utils.createPromiseCallback();
        Company.findOne({
            where: {
                email: email
            }
        }, function (err, company) {
            if (err) {
                fn(err);
            } else {
                if (company && !company.activated) {
                    company.activated = true;
                    company.save(function (err) {
                        if (err) {
                            fn(err);
                        } else {
                            fn();
                        }
                    });
                } else if (company) {
                    let err = new Error('Company has Activated');
                    err.statusCode = 400;
                    err.code = 'HAS_ACTIVATED';
                    fn(err);
                } else {
                    let err = new Error('No have Company');
                    err.statusCode = 401;
                    err.code = 'NO_COMPANY';
                    fn(err);
                }
            }
        });
        return fn.promise;
    };
    Company.remoteMethod('confirmByAdmin',
        {
            description: 'Confirm a company by Admin .',
            accepts: [
                { arg: 'email', type: 'string', required: true },
            ],
            http: { verb: 'get', path: '/confirmbyadmin' },
        }
    );

    Company.afterRemote('confirmByAdmin', function (context, company, next) {
        Company.app.models.Email.send({
            to: context.args.email,
            from: 'vanhuy.hust@gmail.com',
            subject: 'Thanks for registering.',
            html: `<h1>Thank You</h1>
            <p>
              Thanks for registering. Your company has been verify.
            </p>
            <h3>Team BKConnect</h3>`
        }, function (err, mail) {
            next();
            console.log('email sent!');
        });
    });

};
