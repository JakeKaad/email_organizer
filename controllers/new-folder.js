Email.NewFolderController = Ember.ObjectController.extend({
	actions: {
		createFolder: function() {
			folder = this.get('model')
			folder.save();
			this.transitionToRoute('folders');
		}
	}
});

