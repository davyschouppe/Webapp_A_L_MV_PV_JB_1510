var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var passport = require('passport');

require('./backend/models/User');
require('./backend/models/Ontwikkelingsdoel');
require('./backend/models/Afspraak');
require('./backend/models/Traject');
require('./backend/models/Locatie');
require('./backend/models/Afbeelding');

require('./backend/config/passport');

var ontwikkelingsdoelen = require('./backend/routes/ontwikkelingsdoelen');
var afspraken = require('./backend/routes/afspraken');
var trajecten = require('./backend/routes/trajecten');
var users = require('./backend/routes/users');

mongoose.connect('mongodb://webapp-user:user123@ds149865.mlab.com:49865/levensvreugde-db', {  useMongoClient: true });

var app = express();

// start frontend
app.use(express.static(__dirname + '/dist'));
app.listen(process.env.PORT || 4200);

// uncomment after placing your favicon in /public
// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
//app.use(express.static(path.join(__dirname, 'public')));

app.use(passport.initialize());

app.use('/API/users', users);
app.use('/API', ontwikkelingsdoelen);
app.use('/API', afspraken);
app.use('/API', trajecten);

app.all("*", (req, res) => {
  res.status(200).sendFile(`${path.join(__dirname, 'dist')}/index.html`);
})

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  //res.render('error');
});

module.exports = app;
