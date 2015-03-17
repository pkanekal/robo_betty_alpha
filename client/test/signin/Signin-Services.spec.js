describe('Signin-Services',function(){
	beforeEach(module('auth'));
  beforeEach(module('signin'));

  var scope, 
  httpBackend, 
  SigninService,
  api;

  beforeEach(inject(function(_SigninService_,$rootScope, _$httpBackend_){
    scope = $rootScope.$new();
    SigninService = _SigninService_;
    httpBackend = _$httpBackend_;
  }));

  beforeEach(function(){
    api = '/auth/login';
    httpBackend.whenPOST(api).respond(200);
  });

  it("Should be defined", function(){
    expect(SigninService).to.be.defined;
  });

  describe('Testing login() function', function(){
    it('Should post in correct api',function(){
      httpBackend.expectPOST(api);
    });
    it('Mock calls should return given value',function(){
      sinon.stub(SigninService,'login').returns(1);
      SigninService.login();
      expect(SigninService.login()).to.equal(1);
    });
  });

});