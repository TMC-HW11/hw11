'use strict';

var UserView = (function () {
//Tweet
var Tweet = Backbone.View.extend({
  id: 'tweet',
  render: function() {
    console.log('Collection: ' + app.tweets);
    console.log(this.model);
    var text = '<p class="description">' + this.model.get("text") + '</p>';
    var author = '<h5 class="creator">Creator: ' + this.model.get('author') + '</h5>';
    this.$el.html(text + author);
    }
  });

//CreatePostView

var CreatePostView = Backbone.View.extend ({
id: 'create-post-view',
render: function() {
  var header = '<h2>Create Post</h2>';
  var textBox = '<textarea id="description-input"></textarea>';
  var text = '<input type="text" id="text-input">';
  var submit = '<button id="tweet">Tweet!</button>';
  var cancel = '<button id="cancel-task">Cancel</button>';
  this.$el.html(header + textBox + submit + cancel);
},
events : {
  'click #tweet': 'addModel',
  'click #cancel-task': 'clear'
},
  addModel: function() {
    var tweetModel = this.collection.add({ text : $('#text-input')});
    tweetModel.save();
    var text = '<p class="description">' + this.model.get('text') + '</p>';
    var creator = '<h5 class="creator">Creator: ' + this.model.get('creator') + '</h5>';
    self.$el.html(text + creator);
    }
});

//Recent Post View

var RecentPostsView = Backbone.View.extend({
  id: 'recent-posts-view',
  render: function() {
    var header = '<h2>Recent Posts</h2>';
    this.$el.html(header);
console.log('hi from recentpostsview');
    // loop through users tasks
    this.collection.each(function() {
        var currentTweets = new Tweet({ model: tweet });
        currentTweets.render();
        this.$el.append(currentTweets.$el);
    }, this);
  },
  initialize : function () {
    // this.collection.on('add', this.render, this);
    // this.collection.on('remove', this.render, this);
    // this.collection.on('change', this.render, this);
  }
});


  function UserView(users,tweets,el) {
    var recentPostsView = new RecentPostsView({ collection: tweets });

    var createPostView = new CreatePostView({collection: tweets});
    createPostView.render();
    $('#app').append(createPostView.$el);

  }
var userSkeleton = Backbone.Collection.extend ({
//model: User
});

var recentPostsSkeleton = Backbone.Collection.extend ({
//model: recentPosts
});

var myPostsSkeleton = Backbone.Collection.extend({
//model: myPosts
});

  return UserView;
})();
