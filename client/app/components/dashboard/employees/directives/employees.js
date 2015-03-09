'use strict';

angular.module('dashboard')
  .directive('employees', function() {
    return {
      restrict: 'E',
      templateUrl: 'views/components/dashboard/employees/views/employees.html',
      controller: 'EmployeeController',
      controllerAs: 'employeeCtrl'
    };
  })
  .controller('EmployeeController', ['$scope', '$window', '$modal', 'filterFilter', function ($scope, $window, $modal, filterFilter) {
    // include root slecope
    $scope.rowCollection = [
        {
            id: 1,
            Name: "Angelique De Castro",
            PhoneNumber: "(626) 484-0871",
            Email: "ajdecast@ucsd.edu"
        },
        {
            id: 2,
            Name: "Brian Soe",
            PhoneNumber: "(343) 982-2390",
            Email: "bsoe@ucsd.edu"
        },
        {
            id: 3,
            Name: "Andrew Du",
            PhoneNumber: "(019) 348-8210",
            Email: "angelique@ucsd.edu"
        },
        {
            id: 4,
            Name: "Timmy Kua",
            PhoneNumber: "(932) 231-1133",
            Email: "tikua@ucsd.edu"
        },
        {
            id: 5,
            Name: "Scott Upton",
            PhoneNumber: "(342) 930-1232",
            Email: "supton@ucsd.edu"
        },
        {
            id: 6,
            Name: "Lynn Vo",
            PhoneNumber: "(234) 458-2343",
            Email: "lvo@ucsd.edu"
        },
        {
            id: 7,
            Name: "Delia Doe",
            PhoneNumber: "(234) 432-2343",
            Email: "ddoe@ucsd.edu"
        },
        {
            id: 8,
            Name: "Daniel Mariano",
            PhoneNumber: "(234) 458-2343",
            Email: "dmariano@ucsd.edu"
        }
    ];

    var id = 1;
    $scope.newField = {};
    $scope.editing = false;
    //copy the references (you could clone ie angular.copy but then have to go through a dirty checking for the matches)
    $scope.displayedCollection = [].concat($scope.rowCollection);

    //edit a row
    $scope.editRowCollection = function(row) {
        var modalInstance = $modal.open({
        templateUrl: 'views/components/dashboard/employees/views/employee-edit.html',
        controller: 'EmployeeEditController',
        size: 'md',
        backdrop: true,
        resolve: {
          item: function () {
            $scope.row = row;
            return $scope.row; 
          }
        }
        }).result.then(function(result){
        $scope.editing = $scope.rowCollection.indexOf(result)
        $scope.newField = angular.copy(result);
        });
    }

    /*result = [{
                Name: result.Name,
                PhoneNumber: '('+result.PhoneNumber[0]+')',
                Email:result.Email
                }]
            );
        }*/
    
    // cancel editing
    $scope.cancel = function(row) {
    	$scope.rowCollection[$scope.editing] = $scope.newField;
    	$scope.displayedCollection = $scope.rowCollection;
    };

    //add employee info
    $scope.submitForm = function(row){
      $scope.rowCollection.unshift(row);
      $scope.row = {};
      $scope.addForm.name.$setPristine();
      $scope.addForm.number.$setPristine();
      $scope.addForm.email.$setPristine();
    }

    //open add employee form
    $scope.addEmployee = function(){
    	var modalInstance = $modal.open({
    		templateUrl: 'views/components/dashboard/employees/views/employees-add.html',
    		controller: 'EmployeeAddController',
    		size: 'md',
    		backdrop: true,
    		resolve: {}
    	}).
    	result.then(function(result){
            var phone = result.PhoneNumber;
    		$scope.rowCollection.unshift({
                    Name: result.Name,
                    PhoneNumber: '('+phone.charAt(0)+phone.charAt(1)+phone.charAt(2)+') '+phone.charAt(3)+phone.charAt(4)+phone.charAt(5)+'-'+phone.charAt(6)+phone.charAt(7)+phone.charAt(8)+phone.charAt(9),
                    Email:result.Email
                });
        });
    }

    // singular remove instance
    $scope.removeEmployee = function(row){
        var modalInstance = $modal.open({
            templateUrl: 'views/components/dashboard/employees/views/employee-remove.html',
            controller: 'EmployeeRemoveController',
            size: 'md',
            backdrop: true,
            resolve: {
              item: function () {
                $scope.selectedEmployee = row;
                return $scope.selectedEmployee; 
              }
            }
          }).result.then(function(result){
            $scope.row = result;
            var index = $scope.rowCollection.indexOf($scope.row);
            if (index !== -1) {
              $scope.rowCollection.splice(index, 1);
            }
          });
    }

    // multiple remove instance
    $scope.removeMultiple = function(row){
        var modalInstance = $modal.open({
            templateUrl: 'views/components/dashboard/employees/views/employee-remove-multiple.html',
            controller: 'EmployeeRemoveMultipleController',
            size: 'md',
            backdrop: true,
            resolve: {
              item: function () {
                $scope.selectedEmployees = row;
                return $scope.selectedEmployees; 
              }
            }
          }).result.then(function(result){
            $scope.selectedEmployees = result;
            $scope.removeMultipleFinal($scope.selectedEmployees);
          });
    }

    // removeMultiple helper function to return unselected rows
    $scope.removeMultipleFinal = function(row){
        $scope.rowCollection = filterFilter($scope.rowCollection, function(row){
                return !row.selected;
        });
    }
}]);
