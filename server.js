var express = require("express");
const morgan = require("morgan")
var app = express();
var router = express.Router();
var date =new Date()
var hour=date.getHours()
var day =date.getDay()
app.set('view engine', 'pug');
if (hour>= 9 && hour<=17&&day>=1&&day<=5){var path = __dirname + '/views/';
router.use(function (req, res, next) {
  console.log('Time:', Date.now());
  next();
});
app.use('/static', express.static('public'));
app.use(morgan("common"))
router.use(function (req,res,next) {
  console.log("/" + req.method);
  next();
});

router.get("/",function(req,res){
  res.sendFile(path + "Home.html");
});

router.get("/about",function(req,res){
  res.sendFile(path + "OurServices.html");
});

router.get("/contact",function(req,res){
  res.sendFile(path + "ContactUs.html");
});

app.use("/",router);

app.use("*",function(req,res){
  res.sendFile(path + "404.html");
});

app.listen(3000,function(){
  console.log("Live at Port 3000");
});


}

// a middleware function with no mount path. This code is executed for every request to the router

else{/**/
 
  var path = __dirname + '/views/';
  app.use('/static', express.static('public'));
  app.use(morgan("common"))
  router.use(function (req,res,next) {
    console.log("/" + req.method);
    next();
  });
  app.get('/', function (req, res) {
    res.render('404', {  message: 'application dont work come back during working time'});
  });
  app.use("/",router);

app.use("*",function(req,res){
  res.render('404', {  message: 'application dont work come back during working time'});
});


app.listen(3000,function(){
  console.log("Live at Port 3000");
});
}

