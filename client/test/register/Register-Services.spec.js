describe('Register-Services',function(){
	beforeEach(module('auth'));
	beforeEach(module('register'));

  var controller,
      scope,
      RegisterService,
      httpBackend,
      api;

  beforeEach(inject(function( $rootScope, _RegisterService_,_$httpBackend_){
    scope = $rootScope.$new();
    RegisterService = _RegisterService_;
    httpBackend = _$httpBackend_;
  }));

  beforeEach(function(){
    api = '/auth/signup';
    httpBackend.whenPOST(api).respond(200);
  });

  it('Should be defined',function(){
    expect(RegisterService).to.be.defined;
  });

  describe('Testing reg() function',function(){
    it('Should post to correct API',function(){
      httpBackend.expectPOST(api);
    });
    it('Mock calls should return given value',function(){
      sinon.stub(RegisterService,'reg').returns(1);
      RegisterService.reg();
      expect(RegisterService.reg()).to.equal(1);
    });
  });

});