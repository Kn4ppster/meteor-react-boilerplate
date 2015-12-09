UserLogin = React.createClass({

	handleSubmit(e) {
		e.preventDefault();

		var self = this;
		var email = $(e.target).find('[name=email]').val();
		var password = $(e.target).find('[name=password]').val();

		Meteor.loginWithPassword(email, password, function(err) {
			if (err) {
				console.log(err.reason);
			} else {
				FlowRouter.go('Home');
			}
		});
	},

	render() {
		return (
			<div className="user-login">
				<h2>Login</h2>

				<form onSubmit={ this.handleSubmit }>
					<input type="text" name="email" placeholder="Email"/>
					<input type="password" name="password" placeholder="Password"/>
					<input type="submit" value="Login"/>
				</form>

				<a href="/register">Register</a>
			</div>
		);
	}

});