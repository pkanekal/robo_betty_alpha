// describe('Patient-Queue',function(){
// 	beforeEach(module('ngCookies'));
//   beforeEach(module('smart-table'));
//   beforeEach(module('ui.bootstrap'));
//   beforeEach(module('ui.mask'));
//   beforeEach(module('dashboard'));

//   var controller, scope, httpBackend, socket, _DoctorService_, modalInstance;

//   var varItem = [{
//         id: 1,
//         Name: "Meg Whitman",
//         Doctor: "Doctor"
//       }];

//   beforeEach(inject(function($controller,$rootScope,_$httpBackend_,_$modal_){
//     scope = $rootScope.$new();
//     httpBackend = _$httpBackend_;

//     modalInstance = _$modal_.open({
//       templateUrl: 'patients.html'
//     });

//     controller = $controller('PatientQueueCtrl',{
//       $scope:scope,
//       $modal:modalInstance,
//       DoctorService: _DoctorService_,
//       socket: socket
//     });
//   }));

//   describe('Testing checkIfLongWait()',function(){
//     it('sda',function(){
//       // console.log(DoctorService.currTime);
//       // DoctorService.currTime = 10;
//       expect(1).to.equal(1);
//     });
//   });


// });