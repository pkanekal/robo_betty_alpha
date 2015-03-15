describe('Themes-Services', function() {
	beforeEach(module('themes'));

  var scope, httpBackend, http, api, themesService, mockTheme ;

  mockTheme = {form_color: 'default',
                  background_img: 'default',
                  displayPhone : true,
                  diplayClock: true,
                  displaySignature: true,
                  additionalComments: true
              };

  beforeEach(inject(function(_ThemesService_,$rootScope,_$httpBackend_,$http){
    themesService = _ThemesService_;
    scope = $rootScope.$new();
    httpBackend = _$httpBackend_;
    http = $http;
  }));

  beforeEach(function(){
    api = ('/api/' + scope.admin_id + '/theme' );
    httpBackend.whenGET(api).respond(200);
    httpBackend.whenPUT(api).respond(200);
    httpBackend.whenPOST(api).respond(200);
  });

  it('Should be defined', function(){
    expect(themesService).to.be.defined;
  });

  describe('Testing read() function', function(){
    it('Should get API route',function(){
      themesService.read();
      httpBackend.expectGET(api);
    });
    it('Mock calls return given value',function(){
      sinon.stub(themesService,'read').returns(1);
      themesService.read();
      expect(themesService.read()).to.equal(1);
    });
  });

  describe('Testing update() function', function(){
    it('Should get API route',function(){
      themesService.update(mockTheme);
      httpBackend.expectPUT(api);
    });
    it('Mock calls return given value',function(){
      sinon.stub(themesService,'update').returns(1);
      themesService.update(mockTheme);
      expect(themesService.update(mockTheme)).to.equal(1);
    });
  });

  describe('Testing create() function', function(){
    it('Should get API route',function(){
      themesService.create(mockTheme);
      httpBackend.expectPOST(api);
    });
    it('Mock calls return given value',function(){
      sinon.stub(themesService,'create').returns(1);
      themesService.create(mockTheme);
      expect(themesService.create(mockTheme)).to.equal(1);
    });
  });

});