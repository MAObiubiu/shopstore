/* eslint-disable no-unused-vars */
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
   res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET,POST");
  res.render('index', { title: 'Express,Very Goood' });
}
);

module.exports = router;
