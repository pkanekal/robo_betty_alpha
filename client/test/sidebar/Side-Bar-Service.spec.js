describe('Side-Bar-Services',function(){
	beforeEach(module('ngCookies'));
  beforeEach(module('smart-table'));
  beforeEach(module('ui.bootstrap'));
  beforeEach(module('ui.mask'));
  beforeEach(module('dashboard'));

  var scope, 
  httpBackend, 
  SidebarService;

  beforeEach(inject(function(_SidebarService_,$rootScope, _$httpBackend_){
    scope = $rootScope.$new();
    SidebarService = _SidebarService_;
    httpBackend = _$httpBackend_;
  }));

  it('Should be defined', function(){
    expect(SidebarService).to.be.defined;
  });

  describe('Testing getSidebarOptions() function',function(){
    it('Mock calls should return given values',function(){
      sinon.stub(SidebarService,'getSidebarOptions').returns(1);
      SidebarService.getSidebarOptions();
      expect(SidebarService.getSidebarOptions()).to.equal(1);
    });
    it('Should have correct variables',function(){
      expect(SidebarService.getSidebarOptions().length).to.equal(5);
    });
  });

  describe('Testing getSidebarHeader() function',function(){
    it('Should return correctly', function(){
      SidebarService.getSidebarHeader();
      expect(SidebarService.getSidebarHeader()).to.equal('RoboBetty');
    });
  });
});