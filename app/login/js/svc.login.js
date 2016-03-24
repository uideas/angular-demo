!function() {
	'use strict';
	
	window.app.factory('loginService', function($http) {
		var API = {
			loginURL : "json/getLoginStatus.json"
		}
		
		return {
			doLogin: function(params) {
				return $http
					.post(API.loginURL, params);
			}
		};
	});
	
}();