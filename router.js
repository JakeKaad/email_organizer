Email.Router.map(function() {
	this.resource('folders', { path: '/'}, function(){
		this.resource('new-folder');
	});
	this.resource('folder', {path: ':folder_id'})
});
