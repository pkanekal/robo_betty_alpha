'use strict';

angular.module('dashboard')
	.controller('EmployeeRemoveController', function ($scope, $modalInstance, item) {

		$scope.selectedPatient = item;

		$scope.ok = function () {
            $modalInstance.close($scope.selectedEmployee);
		};

		$scope.cancel = function () {
			$modalInstance.dismiss('cancel');
		};

});
