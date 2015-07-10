var express = require('express');  //require the express node module for building a server
var app = express(); //set app to be this created server

// PORT
app.set('port', (process.env.PORT || 5000)); //set the port of our server to be the environment port on heroku
// or 5000 if environment port not specified, as it will not be when we deploy locally


// STATIC FILES
app.use(express.static(__dirname + '/public')); //make static files from the public folder available
// e.g. public/hello.html is now available at http://localhost:3000/hello.html
// http://expressjs.com/starter/static-files.html


// VIEWS
// views is directory for all template files
app.set('views', __dirname + '/views'); //render from the views folder
app.set('view engine', 'ejs'); //sets the view engine to be embedded javascript

// PATHS
app.get('/', function(req, res) {
  res.render('index');
});

// LISTEN
app.listen(app.get('port'), function() { //tell the server to start listening on the specified port
  console.log('Node app is running on port', app.get('port')); //log to the console that the app is running
});
