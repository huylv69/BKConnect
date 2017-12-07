'use strict';
var loopback = require('loopback');
var app = require('../../server/server');
var path = require('path');
module.exports = function (CV) {
    //Get new cv for company 
    CV.getNewCV = function (idCompany, fn) {
        var Post = app.models.post;
        Post.find({
            where: {
                idcompany: idCompany
            }
        }, function (err, listPost) {
            var listCV = [];
            var itemsProcessed = 0;
            console.log(listPost)

            listPost.forEach(post => {
                let idPost = post.idpost;
                console.log(idPost)
                CV.find({
                    where: {
                        idpost: idPost
                    }
                }, function (err, list) {
                    console.log(list)
                    listCV = listCV.concat(list);
                    console.log(listCV)
                    itemsProcessed++;
                    if (itemsProcessed === listPost.length) {
                        fn(null, listCV);
                    }
                })
            }, this);
            // fn(err, listCV);
        })
    }
    CV.remoteMethod('getNewCV',
        {
            description: 'Get list new cv for company .',
            accepts: [
                { arg: 'idCompany', type: 'number', required: true },
            ],
            returns: { arg: 'list', type: 'array' },
            http: { verb: 'get', path: '/getNewCV' }
        }
    );
};
