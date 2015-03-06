Email.Email = DS.Model.extend({
  subject: DS.attr(),
  body: DS.attr(),
  sender: DS.attr(),
  recipient: DS.attr(), 
  folder: DS.belongsTo('folder', {async: true})
});
