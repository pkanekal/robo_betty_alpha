describe('Employee-Remove-Controller', function(){
	beforeEach(module('ngCookies'));
  beforeEach(module('smart-table'));
  beforeEach(module('ui.bootstrap'));
  beforeEach(module('ui.mask'));
  beforeEach(module('dashboard'));

  var controller, 
  scope, 
  httpBackend, 
  modalInstance;
  var varItem = 
    [
      {
        id: 1,
            Name: "Angelique De Castro",
            PhoneNumber: "(626) 484-0871",
            Email: "ajdecast@ucsd.edu"
      },
      {
        id: 2,
            Name: "Brian Soe",
            PhoneNumber: "(343) 982-2390",
            Email: "bsoe@ucsd.edu"
      }
    ];

  beforeEach(inject(function($controller,$rootScope,_$httpBackend_,_$modal_){
    scope = $rootScope.$new();
    httpBackend = _$httpBackend_;

    modalInstance = _$modal_.open({
      templateUrl: 'employee-remove.html'
    });

    controller = $controller('EmployeeRemoveController',{
      $scope:scope,
      $modalInstance:modalInstance,
      item:varItem
    });

  }));

  it('Should be defined', function(){
    expect(controller).to.be.defined;
    expect(scope).to.be.defined;  
  });

  describe('Testing ok() function', function(){
    it('scope.ok()',function(){
      scope.ok();
    });
    it('Mock calls return value given',function(){
      sinon.stub(scope,'ok').returns(1);
      scope.ok();
      expect(scope.ok()).to.equal(1);
    });
  });
  
  describe('Testing cancel() function', function(){
    it('scope.cancel()',function(){
    scope.cancel();
    });
    it('Mock calls return value given',function(){
      sinon.stub(scope,'cancel').returns(1);
      scope.cancel();
      expect(scope.cancel()).to.equal(1);
    });
  });

});