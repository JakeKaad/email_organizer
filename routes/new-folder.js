Email.NewFolderRoute = Ember.Route.extend({
	model: function() {
		var folder = this.store.createRecord('folder');
		return folder;
	}
})