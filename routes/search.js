var indexctrl = require('../controllers/indexctrl')

var express = require('express');
var router = express.Router();

router.get('/', indexctrl.getSearch)
router.post('/', indexctrl.findSomething)

module.exports = router;