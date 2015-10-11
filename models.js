'use strict';

var FakeTwitter = (function() {

  // ----------------------------------------------------------------------------
  // Users
  // ----------------------------------------------------------------------------
  var User = Backbone.Model.extend({
    defaults: {
  		username: '',
      password: '',
        bio: ''
    }
  });

  // var Profile = Backbone.Collection.extend({
  //     model: User,
  //     url: '/profile',
  //     initialize: function() {
  //       this.fetch;
  //     }
  // })

  // ----------------------------------------------------------------------------
  // Tweets
  // ----------------------------------------------------------------------------

  var Tweet = Backbone.Model.extend({
  	defaults: {
  		text: '',
  		author: '',
      timeStamp: '',
      creator: ''
  	}
  });

  var Tweets = Backbone.Collection.extend({
  	model: Tweet,
    url: '/tweets',
    initialize: function() {
      this.fetch();
    }
  });

var myPosts = Backbone.Collection.extend({
  model: myPosts,
});

var recentPosts = Backbone.Collection.extend({
model: recentPosts,
});

  // ----------------------------------------------------------------------------
  // Module
  // ---------------------------------------------------------------------------
  return {
    User: User,
    //Profile: Profile,
    Tweets: Tweets,
    myPosts: myPosts
   };
})();
