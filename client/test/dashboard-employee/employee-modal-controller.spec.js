describe('Employee Controller', function() {
  var scope, scope2;
  var Ctrl;
  var window, doc, compile;
  var modal, modalCtrl;
  var element;
  var dashboardCtrl;
  var testingHTML;
  beforeEach(module('robobetty'));
  
/*
  beforeEach(module('views/components/dashboard/employees/views/employees.html'));
  beforeEach(inject(function (_$controller_,_$rootScope_, _$compile_, _$httpBackend_) {
      Ctrl = _$controller_;
      scope = _$rootScope_.$new();
      //scope2 = _$rootScope_.$new();
      compile = _$compile_;
      http = _$httpBackend_;

      //dashboardCtrl = Ctrl('EmployeeController',{$scope: scope, $window: {}, $modal: {}});
      //modalCtrl = Ctrl('EmployeeModalController',{$scope: scope2, $modalInstance: {}})
      
      var element = '<employees></employees>';
      compile(element)(scope);
      scope.$digest();
    })
  );
  
  describe('$scope.test', function () {
    it('should instantiate the controller properly', function () {
      //console.logc(element,scope);
      var html = '<employees></employees>'
      element = angular.element(html);
      compile(element)(scope);
      scope.$digest();
      scope.openModal();
      console.log(element.html());
      //scope2.ok
    });

    it('should initialize its values properly', function () {

    });
  });
  */
  it('Ensure no empty strings allowed in Name field', function() {});
  it('Ensure at least 2 words in Name field', function() {});
  it('Ensure no empty strings allowed in Number field', function() {});
  it('Ensure at least 7 numbers in Number field', function() {});
  it('Ensure no empty strings allowed in Email field', function() {});
  it('Ensure Email field contains @ and .com', function() {});
});