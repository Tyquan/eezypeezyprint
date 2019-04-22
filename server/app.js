const express = require('express');
const http = require('http');
const path = require('path');
const fs = require('fs');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
var session = require('express-session');
const compression = require('compression');
const multer = require('multer');

const index = require('./routes/index');
const auth = require('./routes/auth');
const employee = require('./routes/employee');

// mlab connection 
const mongoUri = 'mongodb://Tyquan:Jamela17!@ds135926.mlab.com:35926/mocky';

// mongoose mlab connection
mongoose.connect(mongoUri, {
	useNewUrlParser: true
});
//Get the default connection
var db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const app = express();
app.use(compression());

app.set('superSecret', "reklfhsh;fwaeddictechlefslf;sarningsl;fm'safjiowcenter"); // secret constiable
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, '../assets/images', 'fav.png')));
app.use(compression());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({
  secret: 'keysessionsaidding',
  resave: false,
  saveUninitialized: true,
  cookie: {maxAge: 180 * 60 * 1000 }
}));
app.use(express.static(path.join(__dirname, '../assets')));

// Routes
app.use('/', index);
app.use('/auth', auth);
app.use('/employee', employee);

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
    res.render('error');
});

module.exports = app;