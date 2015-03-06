Email.FolderController = Ember.ObjectController.extend ({
  needs: 'folder',
  isCreating: false,
  actions: { 
    sendEmail: function() {
      isCreating: false
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
      folder.save();

      this.transitionToRoute('folder', folder.id);
    },
    creating: function() {
      this.set('isCreating', true);
    }
  }
    
});