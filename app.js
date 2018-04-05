var createError = require('http-errors');
var express = require('express');

 

var path = require('path');
var cookieParser = require('cookie-parser');

var indexRouter = require('./routes/index');
var userRouter = require('./routes/userRoute');

/*
var redis = require('redis');
var redisClient = redis.createClient();
redisClient.on('connect', function() {
    console.log('redisClient connected');
});
*/

var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/user',userRouter);

app.use(function(req, res, next) {
  next(createError(404));
});

app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
