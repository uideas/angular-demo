!function () {
	'use strict';
	
	//define the workbench
    window.app = angular.module('myApp', ['ngRoute']);
}();

!function() {
	'use strict';	
	
	//define the locations
	window.app.config(function($routeProvider, $httpProvider) {
		$routeProvider
		.when('/', {
			redirectTo: '/home'
		})
		.when('/home', {
			templateUrl: 'app/home/view.html'
		})
		.when('/login', {
			templateUrl: 'app/login/view.html'
		})
		.otherwise({
			redirectTo: '/login'
		});
	});
}();

!function() {
	'use strict';
	
	window.app.controller('appController', function($rootScope, $scope) {
		//execute the load function
		console.log('Load the frame success');
	});
}();