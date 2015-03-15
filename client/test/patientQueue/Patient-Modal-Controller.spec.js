describe('Patient-Modal-Controller', function(){
	beforeEach(module('ngCookies'));
  beforeEach(module('smart-table'));
  beforeEach(module('ui.bootstrap'));
  beforeEach(module('ui.mask'));
  beforeEach(module('dashboard'));

  var controller, scope, httpBackend, modalInstance;
  var varItem = [{
        id: 1,
        Name: "Meg Whitman",
        Doctor: "Doctor"
      }];
  // var varItem = [];

  beforeEach(inject(function($controller,$rootScope,_$httpBackend_,_$modal_){
    scope = $rootScope.$new();
    httpBackend = _$httpBackend_;

    modalInstance = _$modal_.open({
      templateUrl: 'patient-modal.html'
    });

    controller = $controller('PatientModalController',{
      $scope:scope,
      $modalInstance:modalInstance,
      item:varItem
    });

  }));

  it('Should be defined', function(){
    expect(controller).to.be.defined;
  });

describe('Testing ok() function', function(){
    it('scope.ok()',function(){
      scope.ok(varItem);
    });
    it('Mock calls return value given',function(){
      sinon.stub(scope,'ok').returns(1);
      scope.ok(varItem);
      expect(scope.ok(varItem)).to.equal(1);
    });
    it('Should define variables',function(){
      scope.ok(varItem);
      console.log(scope.selectedPatient);
      expect(scope.selectedPatient).to.be.defined;

      expect(scope.selectedPatient.Name).to.be.defined;
      expect(scope.selectedPatient.Doctor).to.be.defined;
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