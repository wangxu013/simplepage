//建立express框架,访问主机时,返回index.html网页

var express = require('express');

var app = express();

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
}
);

app.listen(80,()=>{
  console.log('Server started on port 80');

});
