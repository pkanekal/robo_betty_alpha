describe('Recovery-Controller',function(){
	beforeEach(module('recovery'));

  var controller, 
  scope, 
  RecoveryService, 
  httpBackend;

  beforeEach(inject(function($controller, $rootScope, $location, _RecoveryService_, _$httpBackend_){
    scope = $rootScope.$new();
    httpBackend = _$httpBackend_;
    RecoveryService = _RecoveryService_;

    controller = $controller('RecoveryController', {
      $scope:scope,
      $location:$location,
      RecoveryService:RecoveryService
    });
  }));

  it('Should be defined', function(){
    expect(controller).to.be.defined;
    expect(RecoveryService).to.be.defined;
  });

  describe('Testing recovery() function',function(){
    it('Error message - empty email',function(){
      scope.email = '';
      scope.recovery();
      console.log(scope.errMessage);
      expect(scope.errMessage).to.equal('You must enter a valid email address.')
      expect(1).to.equal(1);
    });
    it('Error message - invalid email',function(){
      scope.email = '........';
      scope.recovery();
      console.log(scope.errMessage);
      expect(scope.errMessage).to.equal('Invalid Email/Password')
      expect(1).to.equal(1);
    });
    it('Mock calls should return given value',function(){
      sinon.stub(scope,'recovery').returns(1);
      scope.recovery();
      expect(scope.recovery()).to.equal(1);
    });
  });

});