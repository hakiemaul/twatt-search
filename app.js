const express = require('express');
const app = express()
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

var index = require('./routes/index')

app.use('/', index)

app.listen(3000)