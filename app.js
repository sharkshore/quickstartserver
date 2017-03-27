var express = require('express');
var cors=require('cors');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var users = require('./routes/users');

var app = express();
//支持跨域
app.use(cors());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);


//插入部分
//
//
app.use('/idcard/getIdCardTimeStatiscsInfo',function(req,res,next){   

  //res.header('Access-Control-Allow-Origin', '*');
  //res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
  //res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');

	console.log(req.query);
	console.log(req.params);
	console.log(req.body);
    res.json(
 [

    {
        date:'2017-07-07',
        member: '宝付支付有限公司',
        product: 2,
        response_level: 7,
        count: 6990
    },
    {
        date:'2017-07-07',
        member: '宝付支付有限公司',
        product: 2,
        response_level: 8,
        count: 6875
    },
    {
        date:'2017-07-07',
        member: '宝付支付有限公司',
        product: 2,
        response_level: 9,
        count: 6379
    },

 ]
	);  
});  


app.use('/idcard/getAllMemberNames',function(req,res,next){   

  //res.header('Access-Control-Allow-Origin', '*');
  //res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
  //res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');

    res.json(
		['鹏元征信xxxxxx', '前海征信xxxxx']
		);  
});  




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
