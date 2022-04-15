var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');


const connectionString =  process.env.MONGO_CON ;
mongoose = require('mongoose'); 
mongoose.connect(connectionString,  
 {useNewUrlParser: true, useUnifiedTopology: true}); 

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var olavehicleRouter = require('./routes/olavehicle');
var addmodsRouter = require('./routes/addmods');
var SelectorRouter = require('./routes/Selector');
var olavehicle = require("./models/olavehicle");
var resourceRouter = require('./routes/resource');

var OlaVehicle = require('./models/olavehicle')

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/olavehicle', olavehicleRouter);
app.use('/addmods', addmodsRouter);
app.use('/Selector', SelectorRouter);
app.use('/resource', resourceRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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

// We can seed the collection if needed on server start 
async function recreateDB(){ 
  // Delete everything 
  await OlaVehicle.deleteMany(); 
 
  let instance1 = new olavehicle({vehiclenumber:"s2341a",  numberofpassengers:2, amount:"$25"}); 
  instance1.save( function(err,doc) { 
      if(err) return console.error(err); 
      console.log("First object saved") 
  }); 
  let instance2 = new olavehicle({vehiclenumber:"hj23ab2",  numberofpassengers:5, amount:"$50"}); 
  instance2.save( function(err,doc) { 
      if(err) return console.error(err); 
      console.log("second object saved") 
  });
  let instance3 = new olavehicle({vehiclenumber:"TZ341a",  numberofpassengers:8, amount:"$75"}); 
  instance3.save( function(err,doc) { 
      if(err) return console.error(err); 
      console.log("third object saved") 
  });
  let instance4 = new olavehicle({vehiclenumber:"Tatu41a",  numberofpassengers:2, amount:"$75"}); 
  instance4.save( function(err,doc) { 
      if(err) return console.error(err); 
      console.log("third object saved") 
  });
} 
 
let reseed = true; 
if (reseed) { recreateDB();} 

//Get the default connection 
var db = mongoose.connection; 
 
//Bind connection to error event  
db.on('error', console.error.bind(console, 'MongoDB connection error:')); 
db.once("open", function(){ 
  console.log("Connection to DB succeeded")}); 