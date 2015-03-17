// describe('Checkin-Controller',function(){
//   beforeEach(module('auth'));
//   beforeEach(module('checkin'));

//   var controller, 
//       scope, 
//       CheckinService,
//       socket;

//   beforeEach(inject(function($controller, $rootScope, $timeout, $location, _CheckinService_){
//     scope = $rootScope.$new();
//     CheckinService = _CheckinService_;


//     controller = $controller('CheckinController', {
//       $scope:scope,
//       $timeout:$timeout,
//       $location:$location,
//       CheckinService:CheckinService
//     });
//   }));

//   it('Should be defined',function(){
//     expect(controller).to.be.defined;
//     expect(CheckinService).to.be.defined;
//   });

//   // describe('Testing open() function',function(){
//   //   it('Mock calls should return given value',function(){
//   //     sinon.stub(scope,'open').returns(1);
//   //     scope.open();
//   //     expect(scope.open()).to.equal(1);
//   //   });
//   // });
// });