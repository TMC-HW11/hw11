'use strict';

var app = {};

$(function() {
app.user = new FakeTwitter.User();
app.tweets= new FakeTwitter.Tweets();
	app.userview = new UserView(app.user, app.tweets, '#app');
});
