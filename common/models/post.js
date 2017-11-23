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
};
