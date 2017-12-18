'use strict';
var loopback = require('loopback');
var app = require('../../server/server');
var path = require('path');

module.exports = function (Company) {

    //Check verify before Login 
    Company.beforeRemote('login', function (ctx, user, next) {
        var self = this;
        let email = ctx.args.credentials.email;
        Company.findOne({ where: { "email": email } }, function (err, company) {
            let defaultError = new Error('login failed');
            defaultError.statusCode = 401;
            defaultError.code = 'LOGIN_FAILED';
            console.log(company);
            if (err || company == null) {
                next(defaultError);
            } else {
                if (!company.activated) {
                    let errActive = new Error('The company has not been verified');
                    errActive.statusCode = 409;
                    errActive.code = 'LOGIN_FAILED_COMPANY_NOT_VERIFIED';
                    next(errActive);
                } else if (company.block) {
                    let errBlock = new Error('The company has been blocked');
                    errBlock.statusCode = 406;
                    errBlock.code = 'BLOCK_COMPANY';
                    next(errBlock);
                } else {
                    next();
                }
            }
        })
    })

    //Get List Request 
    Company.getListReq = function (fn) {
        fn = fn || utils.createPromiseCallback();
        Company.find({
            where: {
                activated: false
            }
        }, fn);
        return fn.promise;
    };
    Company.remoteMethod('getListReq',
        {
            description: 'Get list company request .',
            returns: { arg: 'companies', type: 'array' },
            http: { verb: 'get', path: '/getListReq' }
        }
    );

    //Get List Activated 
    Company.getListActivated = function (fn) {
        fn = fn || utils.createPromiseCallback();
        Company.find({
            where: {
                activated: true
            }
        }, fn);
        return fn.promise;
    };
    Company.remoteMethod('getListActivated',
        {
            description: 'Get list company request .',
            returns: { arg: 'companies', type: 'array' },
            http: { verb: 'get', path: '/getListActivated' }
        }
    );
    //Confirm by Admin
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
                    let err = new Error('Company has been Activated');
                    err.statusCode = 409;
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

    //Block  company account
    Company.blockCompany = function (email, fn) {
        fn = fn || utils.createPromiseCallback();
        Company.findOne({
            where: {
                email: email
            }
        }, function (err, company) {
            if (err) {
                fn(err);
            } else {
                if (company && !company.block) {
                    company.block = true;
                    company.save(function (err) {
                        if (err) {
                            fn(err);
                        } else {
                            fn();
                        }
                    });
                } else if (company) {
                    let err = new Error('Company has been Blocked');
                    err.statusCode = 409;
                    err.code = 'HAS_BLOCKED';
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

    Company.remoteMethod('blockCompany',
        {
            description: 'Block company account  by Admin .',
            accepts: [
                { arg: 'email', type: 'string', required: true },
            ],
            http: { verb: 'get', path: '/blockCompany' },
        }
    );
    Company.afterRemote('blockCompany', function (context, company, next) {
        Company.app.models.Email.send({
            to: context.args.email,
            from: 'huylv.confirm@gmail.com',
            subject: 'Block Account.',
            html: `<h1>Attention</h1>
            <p>
            Attention ! Your company account has been block.Please contact Admin as soon as possible
            </p>
            <h3>Team BKConnect</h3>`
        }, function (err, mail) {
            next();
            console.log('email block sent!');
        });
    });

    //Activate  company account
    Company.activateCompany = function (email, fn) {
        fn = fn || utils.createPromiseCallback();
        Company.findOne({
            where: {
                email: email
            }
        }, function (err, company) {
            if (err) {
                fn(err);
            } else {
                if (company && company.block) {
                    company.block = false;
                    company.save(function (err) {
                        if (err) {
                            fn(err);
                        } else {
                            fn();
                        }
                    });
                } else if (company) {
                    let err = new Error('Company has been Reactivated');
                    err.statusCode = 409;
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

    Company.remoteMethod('activateCompany',
        {
            description: 'Reactivate company account  by Admin .',
            accepts: [
                { arg: 'email', type: 'string', required: true },
            ],
            http: { verb: 'get', path: '/activateCompany' },
        }
    );
    Company.afterRemote('activateCompany', function (context, company, next) {
        Company.app.models.Email.send({
            to: context.args.email,
            from: 'huylv.confirm@gmail.com',
            subject: 'Re-Activated Account.',
            html: `<h1>Congratulations</h1>
            <p>
            Congratulations ! Your company account has been Reactivated.
            </p>
            <h3>Team BKConnect</h3>`
        }, function (err, mail) {
            next();
            console.log('email activate sent!');
        });
    });
};
