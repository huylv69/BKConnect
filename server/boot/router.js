'use strict';
var path = require('path');

module.exports = function(server) {
  // Install a `/` route that returns server status
  var router = server.loopback.Router();
  router.get('/status', server.loopback.status());
  router.get('/company',function(req,res){
    res.sendFile('index.html', { root: path.resolve(__dirname, '../..', 'client/company') });
  })
  server.use(router);
  
};
