!function() {
	'use strict';	
	window.app.controller('loginController', function($rootScope, $scope, $location, loginService) {
		$scope.isError = false;
		
		$scope.submitForm = function(el) {
			var $form = $(el).closest('form'),
				param = $form.serializeArray();
			loginService
				.doLogin(param)
				.success(function(r){
					if(r.code.toLowerCase() == "success") {
						$location.path('/');
						setUserInfo(r);
					}else {
						$scope.isError = true;
						$scope.errorMsg = r.msg;
					}
				})
		};
		
		function setUserInfo(r) {
			
		}
	});
}();