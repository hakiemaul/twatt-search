var indexctrl = require('../controllers/indexctrl')

var express = require('express');
var router = express.Router();

router.get('/', indexctrl.getSearch)

module.exports = router;