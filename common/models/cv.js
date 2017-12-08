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
            if (listPost.length == 0) {
                fn(null, listCV);
            } else {
                listPost.forEach(post => {
                    let idPost = post.idpost;
                    CV.find({
                        where: {
                            idpost: idPost,
                            seen: false
                        }
                    }, function (err, list) {
                        listCV = listCV.concat(list);
                        itemsProcessed++;
                        if (itemsProcessed === listPost.length) {
                            fn(err, listCV);
                        }
                    })
                }, this);
            }
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

    //Get all CV company 
    CV.getListCVCompany = function (idCompany, fn) {
        var Post = app.models.post;
        Post.find({
            where: {
                idcompany: idCompany
            }
        }, function (err, listPost) {
            var results = {};
            results.listpost = listPost;
            var itemsProcessed = 0;
            // console.log(listPost)
            if (listPost == 0) {
                fn(null, results);
            } else {
                listPost.forEach(post => {
                    let idPost = post.idpost;
                    CV.find({
                        where: {
                            idpost: idPost
                        }
                    }, function (err, list) {
                        results[idPost] = list;
                        itemsProcessed++;
                        if (itemsProcessed === listPost.length) {
                            fn(err, results);
                        }
                    })
                }, this);
            }
            // fn(err, listCV);
        })
    }
    CV.remoteMethod('getListCVCompany',
        {
            description: 'Get list new cv for company .',
            accepts: [
                { arg: 'idCompany', type: 'number', required: true },
            ],
            returns: { arg: 'results', type: 'object' },
            http: { verb: 'get', path: '/getListCVCompany' }
        }
    );
};
