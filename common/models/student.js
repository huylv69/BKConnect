'use strict';
var config = require('../../server/config.json');
var path = require('path');
module.exports = function (User) {
    //Check verify before Login 
    User.beforeRemote('login', function (ctx, user, next) {
        var self = this;
        let email = ctx.args.credentials.email;
        User.findOne({ where: { "email": email } }, function (err, user) {
            let defaultError = new Error('login failed');
            defaultError.statusCode = 401;
            defaultError.code = 'LOGIN_FAILED';
            console.log(user);
            if (err || user == null) {
                next(defaultError);
            } else {
                if (user.block) {
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


    User.afterRemote('create', function (context, user, next) {
        var options = {
            type: 'email',
            to: user.email,
            from: 'noreply@loopback.com',
            subject: 'Thanks for registering.',
            template: path.resolve(__dirname, '../../server/views/verify.ejs'),
            redirect: '/verified',
            user: user
        };

        user.verify(options, function (err, response) {
            if (err) {
                User.deleteById(user.id);
                return next(err);
            } else {
                next();
            }

        });
    });

    //send password reset link when requested
    User.on('resetPasswordRequest', function (info) {
        var url = 'http://' + config.host + ':' + config.port + '/reset-password';
        var html = 'Click <a href="' + url + '?access_token=' +
            info.accessToken.id + '">here</a> to reset your password';

        User.app.models.Email.send({
            to: info.email,
            from: info.email,
            subject: 'Password reset',
            html: html
        }, function (err) {
            if (err) return console.log('> error sending password reset email');
            console.log('> sending password reset email to:', info.email);
        });
    });

    //render UI page after password change
    User.afterRemote('changePassword', function (context, user, next) {
        context.res.render('response', {
            title: 'Password changed successfully',
            content: 'Please login again with new password',
            redirectTo: '/',
            redirectToLinkText: 'Log in'
        });
    });

    //render UI page after password reset
    User.afterRemote('setPassword', function (context, user, next) {
        context.res.render('response', {
            title: 'Password reset success',
            content: 'Your password has been reset successfully',
            redirectTo: '/',
            redirectToLinkText: 'Log in'
        });
    });

    //Get List Active
    User.getListActive = function (fn) {
        fn = fn || utils.createPromiseCallback();
        User.find({
            where: {
                block: false
            }
        }, fn);
        return fn.promise;
    };
    User.remoteMethod('getListActive',
        {
            description: 'Get list student Active .',
            returns: { arg: 'students', type: 'array' },
            http: { verb: 'get', path: '/getListActive' }
        }
    );

    //Get List Block
    User.getListBlock = function (fn) {
        fn = fn || utils.createPromiseCallback();
        User.find({
            where: {
                block: true
            }
        }, fn);
        return fn.promise;
    };
    User.remoteMethod('getListBlock',
        {
            description: 'Get list student Block .',
            returns: { arg: 'students', type: 'array' },
            http: { verb: 'get', path: '/getListBlock' }
        }
    );


    //Block  User account
    User.blockStudent = function (email, fn) {
        fn = fn || utils.createPromiseCallback();
        User.findOne({
            where: {
                email: email
            }
        }, function (err, student) {
            if (err) {
                fn(err);
            } else {
                if (student && !student.block) {
                    student.block = true;
                    student.save(function (err) {
                        if (err) {
                            fn(err);
                        } else {
                            fn();
                        }
                    });
                } else if (student) {
                    let err = new Error('student has been Blocked');
                    err.statusCode = 409;
                    err.code = 'HAS_BLOCKED';
                    fn(err);
                } else {
                    let err = new Error('No have student');
                    err.statusCode = 401;
                    err.code = 'NO_STUDENT';
                    fn(err);
                }
            }
        });
        return fn.promise;
    };

    User.remoteMethod('blockStudent',
        {
            description: 'Block Student account  by Admin .',
            accepts: [
                { arg: 'email', type: 'string', required: true },
            ],
            http: { verb: 'get', path: '/blockStudent' },
        }
    );
    User.afterRemote('blockStudent', function (context, student, next) {
        User.app.models.Email.send({
            to: context.args.email,
            from: 'huylv.confirm@gmail.com',
            subject: 'Block Account.',
            html: `<h1>Attention</h1>
            <p>
            Attention ! Your account has been block.Please contact Admin as soon as possible
            </p>
            <h3>Team BKConnect</h3>`
        }, function (err, mail) {
            next();
            console.log('email block sent!');
        });
    });

    //Activate  company account
    User.activateStudent = function (email, fn) {
        fn = fn || utils.createPromiseCallback();
        User.findOne({
            where: {
                email: email
            }
        }, function (err, student) {
            if (err) {
                fn(err);
            } else {
                if (student && student.block) {
                    student.block = false;
                    student.save(function (err) {
                        if (err) {
                            fn(err);
                        } else {
                            fn();
                        }
                    });
                } else if (student) {
                    let err = new Error('Student has been Reactivated');
                    err.statusCode = 409;
                    err.code = 'HAS_ACTIVATED';
                    fn(err);
                } else {
                    let err = new Error('No have student');
                    err.statusCode = 401;
                    err.code = 'NO_STUDENT';
                    fn(err);
                }
            }
        });
        return fn.promise;
    };

    User.remoteMethod('activateStudent',
        {
            description: 'Reactivate Student account  by Admin .',
            accepts: [
                { arg: 'email', type: 'string', required: true },
            ],
            http: { verb: 'get', path: '/activateStudent' },
        }
    );
    User.afterRemote('activateStudent', function (context, student, next) {
        User.app.models.Email.send({
            to: context.args.email,
            from: 'huylv.confirm@gmail.com',
            subject: 'Re-Activated Account.',
            html: `<h1>Congratulations</h1>
            <p>
            Congratulations ! Your Student account has been Reactivated.
            </p>
            <h3>Team BKConnect</h3>`
        }, function (err, mail) {
            next();
            console.log('email activate sent!');
        });
    });
};
