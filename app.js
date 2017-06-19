var assert = require('assert');
var logger = require("morgan");
var path = require('path');
var express = require("express")
    , exp_session = require('express-session')
    , bodyparser = require("body-parser")
    , cookieparser = require("cookie-parser")
    , flash = require('connect-flash');

//var passport = require("passport")
//    , LocalStrategy = require("passport-local").Strategy;

var app = express();
app.use(logger('dev'));
app.use(cookieparser());
app.use(bodyparser.urlencoded({extended: false}));
app.use(bodyparser.json());
app.use(exp_session({
  secret: 'crazy dog',
  saveUninitialized: false,
  resave: false
}));
app.use(flash());


app.use("/static", express.static(path.join(__dirname, "/static")));
app.get('/', (req, rsp) => {
  rsp.write('Hello world');
  rsp.end();
});

port = process.env.PORT || 3000
app.listen(port);
console.log('Server listening on port ' + port);
