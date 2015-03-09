'use strict';

angular.module('dashboard')
	.controller('EmployeeEditController', function ($scope, $modalInstance, item) {
		$scope.employee = item;

		$scope.ok = function () {
			$modalInstance.close($scope.employee);
		};

		$scope.cancel = function () {
			$modalInstance.dismiss('cancel');
		};

});