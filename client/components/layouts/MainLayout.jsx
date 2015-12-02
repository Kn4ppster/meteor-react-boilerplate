MainLayout = React.createClass({
	render() {
		return (
			<div className="main-container">
				{this.props.header}

				{this.props.content}

				{this.props.footer}
			</div>
		);
	}
});