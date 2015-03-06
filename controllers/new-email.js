Email.NewEmailController = Ember.ObjectController.extend({
  needs: 'folder',
  actions: {
    sendEmail: function() {
      email = this.get('model')
      email.save();
      folder = this.get('controllers.folder.model')
      folder.get('emails').pushObject(email)
      folder.save();
      this.transitionToRoute('folder', folder.id);
    }
  }
});
