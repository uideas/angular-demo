!function() {
	'use strict';
	
	window.app.factory('homeService', function($http) {
		var API = {
			getUserInfoURL : "json/getUserInfo.json"
		}
		
		return {
			getUserInfo: function(params) {
				return $http
					.post(API.getUserInfoURL, params);
			}
		};
	});
	
}();