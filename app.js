const express = require('express');
const app = express()
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

var search = require('./routes/search')

app.use('/search', search)

app.listen(3000)