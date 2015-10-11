var express = require('express');
var router = express.Router();

//Orchestrate vars
var config = require('../config');
var orch = require('orchestrate');
var db = orch(config.dbkey);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login', { title: '!twitter' });
});

debugger;

router.post('/', function(req, res, next) {
  var userAttempt = req.body.userName;
  var userAttemptPwd = req.body.userPwd;
  console.log('User attempting to logon is: ' + userAttempt);
  db.search('hw11-users', userAttempt)
    .then(function(result) {
      var results = result.body.results;  
      console.log(results);
    
      var userInfo = results.map(function(thing) {            
                    return thing.value;
                 });
    
      console.log(userInfo[0].bio);
      
//      var keys = results.map(function(thing) {            
//                    return thing.path.key;
//                 });
//      console.log('key of userAttempt is: ' + keys);
//      
      res.render('index', { user: userInfo[0].username, bio: userInfo[0].bio });
    
    }) // end .then
    
    .fail(function(result) {
      
      res.redirect('/');
      alert('Sorry, that UserName does not exist. Please try again.');
    }); // end .fail
});

module.exports = router;
