var UserModel = Backbone.Model.extend({
  defaults: {
    username:'',
    tasksCreated: [],
    assignedTasks: []
  },
    addUser : function (str) {
      this.set("username", str);
  }
});

var IssueModel = Backbone.Model.extend({
  defaults: {
    title:'',
    description:'',
    creator:'',
    assignee:'',
    status:'unassigned'
  },
  newTask : function (title, desc, user) {
    this.set("title", title);
    this.set("desc", desc);
    this.set("creator", user);
  },
  assignTask : function (user) {
    this.set("assignee", user);
  },
  status : function (user, status) {
    this.set("assignee", user);
    this.set("status", status);
  }
});

var UserCollection = Backbone.Collection.extend({
  model : UserModel
});

var IssueCollection = Backbone.Collection.extend({
  model : IssueModel
});
