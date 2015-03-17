describe('Thankyou-Controller',function(){
	beforeEach(module('thankyouCheckIn'));

  var controller,
      scope;

  beforeEach(inject(function($controller, $rootScope, $timeout, $location){
    scope = $rootScope.$new();

    controller = $controller('CheckInThankYouController', {
      $location:$location,
      $timeout:$timeout
    });
  }));

  it('Should be defined',function(){
    expect(controller).to.be.defined;
  });


});