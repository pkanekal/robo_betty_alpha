'use strict';

angular.module('register')
  .service('RegisterService', ['$http', function($http) {
      this.signin = function() {
        return $http.get('https://blue-jay.herokuapp.com/api/products');
      };
  }]);