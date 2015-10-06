var app = {};

$(function() { //when DOM is ready...
	app.users = new UserCollection([
		{username:'Anastasia'},
		{username:'Sarah'},
		{username:'Chad'}
	]);

	app.tasks = new IssueCollection([
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
	]);

	app.gui = new GUI(app.users,
						app.tasks,
						'#app');// selector of main div
});
