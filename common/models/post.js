'use strict';
var loopback = require('loopback');
var app = require('../../server/server');
var path = require('path');

module.exports = function (Post) {

    //Get post for company 
    Post.getPostCompany = function (idCompany, fn) {
        Post.find({
            where: {
                idcompany: idCompany
            }
        }, function (err, listPost) {
            fn(err, listPost);
        })
    }
    Post.remoteMethod('getPostCompany',
        {
            description: 'Get list post of company .',
            accepts: [
                { arg: 'idCompany', type: 'number', required: true },
            ],
            returns: { arg: 'list', type: 'array' },
            http: { verb: 'get', path: '/getPostCompany' }
        }
    );
    //Get List Request 
    Post.getAllPost = function (fn) {
        Post.find({
            order: 'created DESC',
            where: {
                expired: { gt: Date.now() }
            }
        }, function (err, list) {
            console.log(Date.now())
            var itemsProcessed = 0;
            if (list == 0) {
                fn(null, list);
            } else {
                list.forEach(function (element) {
                    var sql = ` select logo,name from company where idcompany = ` + element.idcompany;
                    app.dataSources.mysqlDs.connector.query(sql, function (err, res) {
                        element['logoCom'] = res[0].logo;
                        element['nameCom'] = res[0].name;
                        itemsProcessed++;
                        if (itemsProcessed === list.length) {
                            fn(null, list);
                        }
                    })
                }, this);
            }
        });
    };
    Post.remoteMethod('getAllPost',
        {
            description: 'Get list company request .',
            returns: { arg: 'list', type: 'array' },
            http: { verb: 'get', path: '/getAllPost' }
        }
    );

    Post.afterRemote('create', function (context, remoteMethodOutput, next) {
        var idpost = context.result.idpost;
        var listSkill = context.args.data.skill;
        var postSkill = app.models.post_skill;
        // console.log(idpost, context);
        if (listSkill) {
            listSkill.forEach(element => {
                postSkill.create({
                    idpost: idpost,
                    idskill: element.idskill
                }, function (err, res) {
                    if (err) console.log(err);
                    else console.log(res);
                });
            }, this);
        }
        next();
    });

    Post.beforeRemote('deleteById', function (context, remoteMethodOutput, next) {
        var idpost = context.args.id;
        var PostSkill = app.models.post_skill;
        var sql = 'DELETE FROM `cv` WHERE idpost = ' + idpost;
        app.dataSources.mysqlDs.connector.query(sql, function (err, res) {
            PostSkill.deleteById(idpost, function () {
                console.log('delete skill id : ', idpost)
                Post.prototype.__delete__student(null, { "id": idpost })
                next();

            })

        });
    });
    Post.beforeRemote('prototype.patchAttributes', function (context, remoteMethodOutput, next) {
        var idpost = context.args.data.idpost;
        var listSkill = context.args.data.skill;
        var PostSkill = app.models.post_skill;
        PostSkill.deleteById(idpost, function () {
            if (listSkill) {
                listSkill.forEach(element => {
                    PostSkill.create({
                        idpost: idpost,
                        idskill: element.idskill
                    }, function (err, res) {
                        if (err) console.log(err);
                        else console.log(res);
                    });
                }, this);
            }
            next();
        })
    });

};  
