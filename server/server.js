'use strict';

var loopback = require('loopback');
var boot = require('loopback-boot');
var bodyParser = require('body-parser');
var path = require('path');


var app = module.exports = loopback();

// configure view handler
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// configure body parser
app.use(bodyParser.urlencoded({ extended: true }));

// app.use(loopback.token({
//   model: app.models.AccessTokenAdmin
// }));


//List here the paths you do not want to be redirected to the angular application (scripts, stylesheets, templates, loopback REST API, ...)
var ignoredPaths = ['/vendor', '/css', '/js', '/views', '/api', '/explorer','/dist','/plugins'];
app.all('/*', function (req, res, next) {
  //Redirecting to index only the requests that do not start with ignored paths
  if (!startsWith(req.url, ignoredPaths))
    res.sendFile('index.html', { root: path.resolve(__dirname, '..', 'client') });
  else
    next();
});

function startsWith(string, array) {
  for (var i = 0; i < array.length; i++)
    if (string.startsWith(array[i]))
      return true;
  return false;
}

app.start = function () {
  // start the web server
  return app.listen(function () {
    app.emit('started');
    var baseUrl = app.get('url').replace(/\/$/, '');
    console.log('Web server listening at: %s', baseUrl);
    if (app.get('loopback-component-explorer')) {
      var explorerPath = app.get('loopback-component-explorer').mountPath;
      console.log('Browse your REST API at %s%s', baseUrl, explorerPath);
    }
  });
};

// Bootstrap the application, configure models, datasources and middleware.
// Sub-apps like REST API are mounted via boot scripts.
boot(app, __dirname, function (err) {
  if (err) throw err;

  // start the server if `$ node server.js`
  if (require.main === module)
    app.start();
});
