var express = require("express");
var compression = require('compression')
var app = express();
app.use(compression());
var router = express.Router();

var path = __dirname + '/site/';
var dist_path = __dirname + '/dist/';
const PORT = 8080;
const HOST = '0.0.0.0';

router.use(function (req,res,next) {
  console.log("/" + req.method);
  next();
});

router.get("/",function(req,res){
  res.sendFile(path + "index.html");
});

router.get("/original",function(req,res){
  res.sendFile(path + "index.html");
});

router.get("/modificada",function(req,res){
  res.sendFile(dist_path + "index.html");
});

app.use(express.static(path));
app.use("/", router);

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);