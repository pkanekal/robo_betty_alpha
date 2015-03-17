describe('Register-Controller',function(){
	beforeEach(module('auth'));
	beforeEach(module('register'));

  var controller,
      scope,
      AuthService;

  beforeEach(inject(function($controller, $rootScope, _AuthService_,$location){
    scope = $rootScope.$new();
    AuthService = _AuthService_;

    controller = $controller('RegisterController', {
      $scope:scope,
      $location:$location,
      AuthService:AuthService
    });
  }));

  it('Should be defined',function(){
    expect(controller).to.be.defined;
    expect(AuthService).to.be.defined;
  });

  describe('Testing reg() function',function(){
    it('Error message - blank input',function(){
      scope.user = {email: '', password: '', company_name: '', company_phone_number: ''};
      scope.reg();
      expect(scope.errorMessage).to.equal('Please provide company name, password, phone, and email.');
      console.log(scope.errorMessage);
    });
    it('Error message - password too short',function(){
      scope.user = {email: 'test@email.com', password: 'tes', company_name: 'testing', company_phone_number: '1234567890'};
      scope.pass = 'tes';
      scope.number = '1234567890';
      scope.reg();
      expect(scope.errorMessage).to.equal('Password must be at least 4 characters');
      console.log(scope.errorMessage);
    });
    it('Error message - wrong password',function(){
      scope.user = {email: 'test@email.com', password: 'test', company_name: 'testing', company_phone_number: '1234567890'};
      scope.pass = 'wrong';
      scope.number = '1234567890';
      scope.reg();
      expect(scope.errorMessage).to.equal('Please make sure your passwords match');
      console.log(scope.errorMessage);
    });
    it('Error message - phone number size',function(){
      scope.user = {email: 'test@email.com', password: 'test', company_name: 'testing', company_phone_number: '00000'};
      scope.pass = 'test';
      scope.number = '0000';
      scope.reg();
      expect(scope.errorMessage).to.equal('Phone number should be 10-11 numbers long.');
      console.log(scope.errorMessage);
    });
    it('Error message - not checked',function(){
      scope.user = {email: 'test@email.com', password: 'test', company_name: 'testing', company_phone_number: '1234567890'};
      scope.pass = 'test';
      scope.check = false;
      scope.number = '1234567890';
      scope.reg();
      expect(scope.errorMessage).to.equal('You must agree to the terms and conditions');
      console.log(scope.errorMessage);
    });
    it('Passed!',function(){
      scope.user = {email: 'test@email.com', password: 'test', company_name: 'testing', company_phone_number: '1234567890'};
      scope.pass = 'test';
      scope.check = true;
      scope.number = '1234567890';
      scope.reg();
      expect(scope.errorMessage).to.equal('');
    });
    it('Mock calls should return given values',function(){
      sinon.stub(scope,'reg').returns(1);
      scope.reg();
      expect(scope.reg()).to.equal(1);
    });
  });
});