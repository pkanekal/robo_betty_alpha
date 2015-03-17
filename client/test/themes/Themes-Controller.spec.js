describe('Themes-Controller', function(){
	beforeEach(module('ngCookies'));
  beforeEach(module('smart-table'));
  beforeEach(module('ui.bootstrap'));
  beforeEach(module('ui.mask'));
  beforeEach(module('themes'));
  beforeEach(module('dashboard'));

  var scope, 
  httpBackend, 
  message, 
  themesService, 
  mockTheme ;

  mockTheme = {form_color: 'default',
                  background_img: 'default',
                  displayPhone : true,
                  diplayClock: true,
                  displaySignature: true,
                  additionalComments: true
              };

  beforeEach(inject(function($controller, $rootScope, $location, _ThemesService_){
    scope = $rootScope.$new();
    themesService = _ThemesService_;

    controller = $controller('ThemesController', {
      $scope:scope,
      $location:$location,
      ThemesService:themesService
    });
  }));

  it('Should be defined', function(){
    expect(controller).to.be.defined;
    expect(themesService).to.be.defined;
  });

  describe('Testing submitTheme() function',function(){
    it('Mock calls return given value',function( ){
      sinon.stub(scope,'submitTheme').returns(1);
      scope.submitTheme();
      expect(scope.submitTheme()).to.equal(1);
    });
  });

  describe('Testing clear() function', function(){
    it('Should clear the values',function(){
      scope.clear();
      expect(scope.theme.background_img).to.equal('');
      expect(scope.selectedImage.value).to.equal('');
      expect(scope.message).to.equal('');     
    });
  });
});