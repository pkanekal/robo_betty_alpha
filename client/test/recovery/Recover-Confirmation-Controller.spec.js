describe('Recovery Confirmation Controller',function(){
	beforeEach(module('recoverythx'));

  var controller, 
  scope, 
  httpBackend;

  beforeEach(inject(function($controller, $rootScope, $location, $timeout, _$httpBackend_){
    scope = $rootScope.$new();
    httpBackend = _$httpBackend_;

    controller = $controller('RecoveryConfirmController', {
      $location:$location,
      $timeout:$timeout
    });
  }));

  it('Should be defined',function(){
    expect(controller).to.be.defined;
  });

});