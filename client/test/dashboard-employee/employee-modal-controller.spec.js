describe('EmployeeController', function() {
  var scope, scope2;
  var Ctrl;
  var window, doc, compile;
  //var modal, modalCtrl;
  var element;
  var dashboardCtrl;
  var testingHTML;


  beforeEach(module('robobetty'));
  //beforeEach(module('employees-modal.html'));
  
  /*
  var $templateCache;
     beforeEach(inject(function (_$templateCache_) {
     $templateCache = _$templateCache_;
  }));

  describe('some test', function () {
    it('should do something', function () {
        // --> load the fragment.html content from the template cache <--
        var fragment = $templateCache.get('employees-modal.html');
        console.log(fragment);
    });
  });
*/

  describe('Controller: modalCtrl', function () {

    beforeEach(module('employees-modal.html'));

    var Ctrl;
    var scope;
    var modalInstance;

    // Initialize the controller and a mock scope
    beforeEach(inject(
        function ($controller, $rootScope, _$modal_) {
            scope = $rootScope.$new();
            modalInstance = _$modal_.open({
                templateUrl: 'employees-modal.html'
            });

            Ctrl = $controller('EmployeeModalController', {
                $scope: scope,
                $modalInstance: modalInstance,
                //itemArray: function () { return ['a', 'b', 'c']; }
            });
        })
    );

    describe('Initial state', function () {
        it('should instantiate the controller properly', function () {
            expect(Ctrl).to.be.defined;
        });

        
        it('should close the modal when Ok is pressed', function () {
          scope.ok();
          console.log("Enters here");
          //expect(Ctrl).to.not.exist;
        });


       it('should close the modal when Cancel', function () {
          scope.cancel();
          console.log("Enters here 2");
          //expect(modalInstance.dismiss).toHaveBeenCalledWith("cancel");
       });
    });

});
  
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