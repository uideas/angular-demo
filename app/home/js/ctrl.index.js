!function() {
	'use strict';
	window.app.controller('homeController', function($rootScope, $scope, $location, homeService) {
		$scope.userId = '1';
		homeService
			.getUserInfo($scope.userId)
			.success(function(r){
				if(r.code.toLowerCase() == "success") {
					var uData = r.data[0];
					$scope.userName = uData.name;
					$scope.userSex = uData.sex == 'male' ? 'Mr' : 'Miss';
					$scope.userAge = uData.age;
					
				}else {
					$scope.isError = true;
					$scope.errorMsg = r.msg;
				}
			})
	});
}();