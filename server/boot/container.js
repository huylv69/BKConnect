module.exports = function(app) {
    app.dataSources.storage.connector.getFilename = function (origFilename, req, res) {
          var origFilename = origFilename.name;
          var parts = origFilename.split('.'),
          extension = parts[parts.length-1];
          var newFilename = (new Date()).getTime()+'_'+parts[parts.length-2]+'.'+extension;
          return newFilename;
    }
  };