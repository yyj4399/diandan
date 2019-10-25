var express = require('express')
var app = express()

app.get('/', (req, res) => {
  res.send(JSON.stringify({ status: 'ok' }))
})

app.listen(3001, () => {
  console.log('服务器已启动')
})