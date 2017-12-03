'use strict';
var loopback = require('loopback');
var app = require('../../server/server');
var path = require('path');

module.exports = function (Post) {
    //Get List Request 
    Post.getAllPost = function (fn) {
        Post.find({}, function (err, list) {
            var itemsProcessed = 0;
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
        console.log(idpost, context);
        listSkill.forEach(element => {
            postSkill.create({
                idpost: idpost,
                idskill: element.idskill
            }, function (err, res) {
                if (err) console.log(err);
                else console.log(res);
            });
        }, this);
        // skill.create({
        //     "testid": idtest,
        //     "ranking": []
        // }, function (err, res) {
        //     if (err) console.log(err);
        //     else console.log(res);
        // });
        next();
    });

    Post.beforeRemote('deleteById', function (context, remoteMethodOutput, next) {
        console.log(context);
        var idpost = context.args.id;
        var PostSkill = app.models.post_skill;
        PostSkill.deleteById(idpost, function () {
            console.log('delete id : ', idpost)
            next();
        })
    });


    Post.beforeRemote('prototype.patchAttributes', function (context, remoteMethodOutput, next) {
        console.log(context);
        var idpost = context.args.data.idpost;
        var listSkill = context.args.data.skill;
        var PostSkill = app.models.post_skill;
        PostSkill.deleteById(idpost, function () {
            console.log('delete skill id post : ', idpost)
            console.log(idpost, context);
            listSkill.forEach(element => {
                PostSkill.create({
                    idpost: idpost,
                    idskill: element.idskill
                }, function (err, res) {
                    if (err) console.log(err);
                    else console.log(res);
                });
            }, this);
            next();
        })
    });

};
