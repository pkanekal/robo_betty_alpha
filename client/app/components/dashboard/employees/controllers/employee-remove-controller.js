'use strict';

angular.module('dashboard')
	.controller('EmployeeRemoveController', function ($scope, $modalInstance, item) {

		$scope.selectedEmployee = item;

		$scope.ok = function () {
            $modalInstance.close($scope.selectedEmployee);
		};

		$scope.cancel = function () {
			$modalInstance.dismiss('cancel');
		};

});
