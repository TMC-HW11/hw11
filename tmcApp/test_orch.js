var config = require('./config');
var orch = require('orchestrate');
var db = orch(config.dbkey);


//db.post('test', {
//  "duck": "quack",
//  "color": "red"
//  
//}).then(function(result) {
//    console.log(result.path.key);
//})

//db.remove('test', '1');

db.search('test', 'value.color:red')
  .then(function(result) {
    var results = result.body.results;
    console.log(results);
    var keys = results.map(function(thing) {
                return thing.path.key;
              })  
    console.log(keys);
  });

//db.list('test')
//  .then(function(result) {
//    console.log(result.body.results);
//  });
