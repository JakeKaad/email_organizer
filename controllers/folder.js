Email.FolderController = Ember.ObjectController.extend ({
	actions: { 
		sendEmail: function() {
			recipient = this.get('recipient');
			sender = this.get('sender');
			subject = this.get('subject');
			body = this.get('body');

      email = this.store.createRecord('email', {
        recipient: recipient,
        sender: sender,
        subject: subject,
        body: body
      });
      folder = this.get('model')
      folder.get('emails').pushObject(email); 
      this.set('recipient', '');
      this.set('sender', '');
      this.set('subject', '');
      this.set('body', '');
      email.save();
      debugger;
      folder.save();

      this.transitionToRoute('folder', folder.id);
    }
  }
		
});