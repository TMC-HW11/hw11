'use strict';

var app = {};

$(function() {
//	app.user = new FakeTwitter.User();

//	app.tasks= new FakeTwitter.Tweets();
	app.tweets= new FakeTwitter.Tweets();
	app.gui = new UserView(app.user, app.tweets, '#app');
});
