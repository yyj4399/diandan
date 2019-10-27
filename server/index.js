var express = require('express')
var app = express()

app.all('*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  // res.header('Access-Control-Allow-Headers', 'Content-Type');
  // res.header('Access-Control-Allow-Methods', '*');
  res.header('Content-Type', 'application/json;charset=utf-8');
  next();
});

app.get('/', (req, res) => {
  res.json({ status: 'ok' })
})

app.listen(3001, () => {
  console.log('服务器已启动')
})