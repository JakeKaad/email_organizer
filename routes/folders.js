Email.FoldersRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('folder');
  }
});
