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
			templateUrl: 'view/funds/index.jsp',
			controller: 'homeCtrl'
		})
		.when('/login', {
			templateUrl: 'view/member/login.jsp',
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
