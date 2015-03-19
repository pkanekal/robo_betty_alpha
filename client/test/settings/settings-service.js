describe('SettingsService', function() {
  beforeEach(module('ngCookies'));
  beforeEach(module('smart-table'));
  beforeEach(module('ui.bootstrap'));
  beforeEach(module('ui.mask'));
  beforeEach(module('dashboard'));

  var SettingsService;
  var user = { password: '', newpassword: ''};

  beforeEach(inject(function(_SettingsService_) {
    SettingsService = _SettingsService_;
  }));

  it('Should be defined', function() { 
    expect(SettingsService).to.be.defined;
  });


  describe('When making http requests', function() {

    var $http, httpBackend,
      settingRoute, apiRoute, scope,
      email, token;

    beforeEach(inject(function(_$http_, _$httpBackend_,$rootScope){
      $http = _$http_;
      httpBackend = _$httpBackend_;
      scope = $rootScope.$new();
    }));

    beforeEach(function() {
      /* Mock routes and credentials */
      settingRoute = ('/auth/setting/' + scope.emai);

      httpBackend.whenPUT(settingRoute).respond(200);
    });

    afterEach(function(){
      httpBackend.verifyNoOutstandingExpectation();
      httpBackend.verifyNoOutstandingRequest();
    });

    it('Should PUT the api route', function() {
      SettingsService.update(user);
      httpBackend.expectPUT(settingRoute);
      httpBackend.flush();
    });

    it('Should PUT the diff api route', function() {
      sinon.stub(SettingsService, 'update').returns(1);
      SettingsService.update(user);
      expect(SettingsService.update(user)).to.equal(1);
    });

  });

});
