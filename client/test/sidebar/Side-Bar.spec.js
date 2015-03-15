describe('Side-Bar',function(){
  beforeEach(module('ngCookies'));
  beforeEach(module('smart-table'));
  beforeEach(module('ui.bootstrap'));
  beforeEach(module('ui.mask'));
  beforeEach(module('dashboard'));

  var controller, scope, httpBackend, SidebarService;

  beforeEach(inject(function($controller, _SidebarService_,$rootScope, _$httpBackend_,$cookieStore){
    scope = $rootScope.$new();
    SidebarService = _SidebarService_;
    httpBackend = _$httpBackend_;

    controller = $controller('SidebarController', {
      $scope:scope,
      $cookieStore:$cookieStore,
      SidebarService:SidebarService
    });
  }));

  it('Should be defined',function(){
    expect(controller).to.be.defined;
    expect(SidebarService).to.be.defined;
  });

  describe('Testing toggleSidebar() function',function(){
    it('Mock calls should return given value',function(){
      sinon.stub(scope,'toggleSidebar').returns(1);
      scope.toggleSidebar();
      expect(scope.toggleSidebar()).to.equal(1);
    });
  });
  
});