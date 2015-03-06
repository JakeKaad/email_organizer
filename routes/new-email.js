Email.NewEmailRoute = Ember.Route.extend({
	model: function() {
		var email = this.store.find('email');
		return email;
	}, 
	controllerName: 'folder'
})