'use strict';
var express = require('express');
var router = express.Router();

/* GET users listing. */
/*jslint unparam: true*/
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});
/*jslint unparam: false*/
module.exports = router;
