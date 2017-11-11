'use strict';
var app = require('../../server/server');

module.exports = function (Container) {
    Container.afterRemote('upload', function (context, container, next) {
        // console.log(context.req.params);
        // console.log(container.result.files['']);
        app.models.student.upsertWithWhere({ "idstudent": container.result.fields.idstudent[0] }, { "photo": app.get('url').replace(/\/$/, '') + "/api/containers/" + container.result.files[''][0].container + "/download/" + container.result.files[''][0].name }, function () { });
        next();
    })
};
