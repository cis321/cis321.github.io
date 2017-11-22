var compression = require('compression') // libreria para comprimir los datos cuando los envia
var serveStatic = require('serve-static') // Manejo de los archivos de forma estatica
var express = require('express');
var morgan = require('morgan');
var path = require('path');
var fs = require('fs');
var rfs = require('rotating-file-stream');
var app = express();

var maxAge = 86400000; // Max age for caching, currently set to single day


var logDirectory = path.join(__dirname, 'logs')


// ensure log directory exists
fs.existsSync(logDirectory) || fs.mkdirSync(logDirectory)

// create a rotating write stream
var accessLogStream = rfs('access.log', {
  interval: '1d', // rotate daily
  path: logDirectory,
})

// setup the logger
app.use(morgan('combined', {
  stream: accessLogStream,
}))

// compress all requests
app.use(compression());
// Serve up content from public directory
app.use(serveStatic(__dirname, {
  'maxAge': maxAge,
}));


app.listen(process.env.PORT || 9044,
  function () {
    console.log('I am running on port ' + (process.env.PORT || 9044) + ' biatch');
  }
);
