// describe('Employees', function(){
//   beforeEach(module('ngCookies'));
//   beforeEach(module('smart-table'));
//   beforeEach(module('ui.bootstrap'));
//   beforeEach(module('ui.mask'));
//   // beforeEach(module('jquery'));
//   beforeEach(module('dashboard'));

//   var controller, scope, httpBackend, modalInstance, filterFilter, windo;
//   var varItem = 
//     [
//       {
//         id: 1,
//             Name: "Angelique De Castro",
//             PhoneNumber: "(626) 484-0871",
//             Email: "ajdecast@ucsd.edu"
//       },
//       {
//         id: 2,
//             Name: "Brian Soe",
//             PhoneNumber: "(343) 982-2390",
//             Email: "bsoe@ucsd.edu"
//       }
//     ];

//   beforeEach(inject(function($controller, $rootScope, _$modal_, _$httpBackend_,_$window_,_filterFilter_){
//     scope = $rootScope.$new();
//     httpBackend = _$httpBackend_;
//     filterFilter = _filterFilter_;
//     windo = _$window_;

//     modalInstance = _$modal_.open({
//       templateUrl: 'employees.html'
//     });

//     controller = $controller('EmployeeController', {
//       $scope:scope,
//       $modal:modalInstance,
//       $window:windo,
//       filterFilter:filterFilter
      
//     });

//   }));

//   it('asd',function(){
//     expect(1).to.equal(1);
//   })
//   // describe('Testing checkIfEmptyTable() function', function(){
//   //   it('Mock calls return given value',function(){
//   //     sinon.stub(controller,'checkIfEmptyTable').returns(1);
//   //     controller.checkIfEmptyTable();
//   //     expect(controller.checkIfEmptyTable()).to.equal(1);
//   //   });
//   // });
//   // describe('Testing editRowCollection() function', function(){
//   //   it('Mock calls return given value',function(){
//   //     sinon.stub(scope,'editRowCollection').returns(1);
//   //     scope.editRowCollection(varItem);
//   //     expect(scope.editRowCollection(varItem)).to.equal(1);
//   //   });

//   // });


// });