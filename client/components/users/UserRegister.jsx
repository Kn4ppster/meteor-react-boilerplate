UserRegister = React.createClass({

	getInitialState: function() {
		return {
			error: ''
		};
	},

	handleSubmit(e) {
		e.preventDefault();

		var self = this
		, username = $(e.target).find('[name=username]').val() || ''
		, email = $(e.target).find('[name=email]').val() || ''
		, password = $(e.target).find('[name=password]').val() || ''
		, firstname = $(e.target).find('[name=firstname]').val() || ''
		, lastname = $(e.target).find('[name=lastname]').val() || ''
		;

		Accounts.createUser({
			username: username
			, email: email
			, password: password
			, profile: {
				name: firstname + lastname
				, firstname: firstname
				, lastname: lastname
			}
		}, function(err) {
			if (err) {
				console.log(err.reason);
				self.setState({error: err.reason});
			} else {
				FlowRouter.go('Login');
			}
		});
	},

	render() {
		var error = this.state.error;
		return (
			<div className="user-registration">
				<h2>Registration</h2>
				<span className="error">{error}</span>
				<form onSubmit={ this.handleSubmit }>
					<input type="text" name="username" placeholder="Username"/>
					<input type="text" name="firstname" placeholder="First name"/>
					<input type="text" name="lastname" placeholder="Last name"/>
					<input type="text" name="email" placeholder="Email"/>
					<input type="password" name="password" placeholder="Password"/>
					<input type="submit" value="Login"/>
				</form>
			</div>
		);
	}

});