angular.module('app').factory('umUser', function($resource) {
	var UserResource = $resource('/api/users/:id', {id: '@id'});

	UserResource.prototype.isAdmin = function() {
		return this.roles && this.roles.indexOf('admin') > -1;
	};

	return UserResource;
});