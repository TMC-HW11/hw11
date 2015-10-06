var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login', { title: '!twitter' });
});

router.post('/', function(req, res, next) {
  console.log(req.body.userName);
  
  res.render('index', { title: req.body.userName });
});

module.exports = router;
