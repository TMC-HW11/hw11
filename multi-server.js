
var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : false}));
app.use(express.static(__dirname));

var database = {};

database.users = [
	{id:0, username:'Anastasia'},
	{id:1, username:'Sarah'},
	{id:2, username:'Chad'}
];

database.issues = [
      { title:      'Build Models',
        description:'Build the User and Issue models.',
        creator:    'Chad',
        assignee:   '',
        status:     'unassigned'
      },
      { title:      'Build Main Views',
        description:'Build the Login and User views. Add Logout and New Task buttons to User view.',
        creator:    'Anastasia',
        assignee:   'Chad',
        status:     'assigned'
      },
      { title:      'Build Task Views',
        description:'Build the User, Unassigned and New Task Views.',
        creator:    'Sarah',
        assignee:   'Sarah',
        status:     'assigned'
      },
      { title:      'Testing',
        description:'Tie the task views to the Issues Collection and test that all buttons and view switches are working correctly.',
        creator:    'Chad',
        assignee:   '',
        status:     'unassigned'
      },
      { title:      'Zoolander',
        description:'Make it look good!.',
        creator:    'Anastasia',
        assignee:   'Anastasia',
        status:     'assigned'
      },
	];

function showData(collname) {
	console.log(collname+' data store is now: ', database[collname]);
}

function getOne(collname) {
	app.get('/'+collname+'/:id', function (req, res) {
		var id = req.params.id;
		console.log('Sending model #%s...',id);
		res.send(database[collname][id]);
	});
}

function putOne(collname) {
	app.put('/'+collname+'/:id', function (req, res) {
		var id = req.params.id;
		console.log('Receiving model #%s...',id);
		database[collname][id] = req.body;
		showData(collname);
		res.send({});
	});
}

function postOne(collname) {
	app.post('/'+collname, function (req, res) {
		console.log('Receiving new model...');
		var newid = collname.length;
		console.log('Assigning id of %s',newid);
		var obj = req.body;
		obj.id = newid;
		database[collname][newid] = obj;
		showData(collname);
		res.send(obj);
	});
}

function getAll(collname) {
	app.get('/'+collname, function (req, res) {
		console.log('Sending all models...');
		showData(collname);
		res.send(database[collname]);
	});
}

function makeRoutes(collname) {
	getOne(collname);
	postOne(collname);
	putOne(collname);
	getAll(collname);
}

Object.keys(database).forEach(makeRoutes);

app.listen(3000);
Object.keys(database).forEach(showData);
