FlowRouter.route('/', {
	name: 'Home',
	action(params) {
		renderMainLayoutWith(<Home />);
	}
});

FlowRouter.route('/login', {
	name: 'Login',
	action(params) {
		renderMainLayoutWith(<UserLogin />);
	}
});

renderMainLayoutWith = function(component) {
	ReactLayout.render(MainLayout, {
		header: <Header />,
		content: component,
		footer: <Footer />
	});
};