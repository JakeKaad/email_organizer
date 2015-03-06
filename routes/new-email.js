Email.NewEmailRoute = Ember.Route.extend({
	model: function() {
		var email = this.store.createRecord('email');
		return email;
	}
})