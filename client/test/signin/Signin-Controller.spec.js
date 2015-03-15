describe('Signin-Controller',function(){
	beforeEach(module('auth'));
  beforeEach(module('signin'));

  var controller,
      AuthService,
      scope,
      httpBackend;

  beforeEach(inject(function($controller,$rootScope,$location,_AuthService_,_$httpBackend_){
    scope = $rootScope.$new();
    AuthService = _AuthService_;
    httpBackend = _$httpBackend_;

    controller = $controller('SigninController', {
      $scope:scope,
      $location:$location,
      AuthService:AuthService
    });

  }));

  it('Should be defined',function(){
    expect(controller).to.be.defined;
    expect(AuthService).to.be.defined;
  });

  describe('Testing login() function',function(){
    it('Mock calls should return given value',function(){
      sinon.stub(scope,'login').returns(1);
      scope.login();
      expect(scope.login()).to.equal(1);
    });
    it('Should fail (email)',function(){
      scope.user = {email: '@@@@@@', password: ''};
      scope.login();
      expect(scope.errMessage).to.equal('Invalid Email/Password');
    });
  });
});