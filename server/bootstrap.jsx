Meteor.startup(() => {
	if (Meteor.users.find().count() === 0) {
		Accounts.createUser({
			email: 'admin@admin.com',
			password: 'password99x1'
		});
	}
});