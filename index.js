const express = require('express')
var http = require('http')
const app = express()

http.createServer(app).listen(80)

app.set('title', 'My Site')
