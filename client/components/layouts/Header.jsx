Header = React.createClass({
	mixins: [ReactMeteorData],

	getMeteorData() {
		return {
			currentUser: Meteor.user()
		}
	},

	handleLogout(e) {
		e.preventDefault();
		Meteor.logout();
		FlowRouter.go('Login');
	},

	render() {
		let loginButton;
		let { currentUser } = this.data;

		if (currentUser) {
			loginButton = (
				<li>
					<span>{ currentUser.username }</span> <a href="#" onClick={ this.handleLogout }>Logout</a>
				</li>
			);
		} else {
			loginButton = (
				<li>
					<a href="/login">Login</a>
				</li>
			);
		}

		return (
			<div>
				<h4>Header</h4>
				<ul>
					<li>
						<a href="/">Home</a>
					</li>
					{ loginButton }
				</ul>
			</div>
		);
	}
});