!function () {
	'use strict';
    window.app = angular.module('tj', ['ngRoute']);
}();

!function() {
	'use strict';	
	window.app.config(function($routeProvider, $httpProvider) {
		$routeProvider
		.when('/', {
			redirectTo: '/home'
		})
		.when('/home', {
			templateUrl: 'app/login/view.html',
			controller: 'homeCtrl'
		})
		.when('/login', {
			templateUrl: 'app/home/view.html',
			controller: 'loginCtrl'
		})
		.otherwise({
			redirectTo: '/login'
		});
	});
}();

!function() {
	'use strict';	
	window.app.controller('appController', function($rootScope, $scope, $location) {
		alert('alert');
	});
}();
