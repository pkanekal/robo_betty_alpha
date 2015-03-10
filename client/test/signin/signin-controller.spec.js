describe('Signin Controller Test', function() {
	// Better to use Chai's assert rather than expectjs

	// variables
	// $scope sets expectations 
	var scope, SigninController; 

	beforeEach(module('signin'));
	// using injector to inject dependencies into test
	beforeEach(inject(function($rootScope, $controller) {
		scope = $rootScope.$new();
		SigninController = $controller('SigninController', {
			$scope: scope
		});
	}));

	//testing initial setup 
	describe('Controller', function() {
		
		it('should exist', function() {
			expect(SigninController.name).to.be.defined;
		});
		
		it('user email must be initially empty', function() {
			assert.equal('',scope.user.email); 
		});
		
		it('user password must be initially empty', function() {
			assert.equal('', scope.user.password); 
		});

		it('error message (errMessage) must be initially empty', function() {
			assert.equal('', scope.errMessage); 
		});

	});

	//testing login()
	// this needs thorough testing - many ways to break login()
	describe('Testing Login function - user is playing nice', function() {

		beforeEach(function() {
			scope.user.email = "testuser@mail.com";
		});

		it('valid email. valid password is length minimal(4) all digits', function() {
			scope.user.password = "1234";
			scope.login();
			assert.equal('', scope.errMessage);
		});

		it('valid email. valid password is of length minimal(4) all special characters', function() {
			scope.user.password = "!@#$";
			scope.login();
			assert.equal('', scope.errMessage);
		});

		it('valid email. valid password is of length minimal(4) all letters', function() {
			scope.user.password = "abcd";
			scope.login();
			assert.equal('', scope.errMessage);
		});

		it('valid email. valid password is of length minimal(4) all mixed', function() {
			scope.user.password = "1@a$";
			scope.login();
			assert.equal('', scope.errMessage);
		});

		it('valid email. valid password is of length 8 all digit', function() {
			scope.user.password = "12345678";
			scope.login();
			assert.equal('', scope.errMessage);
		});

		it('valid email. valid password is of length 8 all special characters', function() {
			scope.user.password = "##!@$%^&";
			scope.login();
			assert.equal('', scope.errMessage);
		});		

		it('valid email. valid password is of length 8 all letters', function() {
			scope.user.password = "asbcdfdf";
			scope.login();
			assert.equal('', scope.errMessage);
		});

		it('valid email. valid password is of length 8 all mixed', function() {
			scope.user.password = "1B3!5A6@";
			scope.login();
			assert.equal('', scope.errMessage);
		});

	});

	describe('Testing Login function - user is NOT playing nice', function() {

		it('invalid email - error message should appear', function() {
			scope.user.email = "@mail.com";
			scope.user.password = "1234";
			scope.login();
			assert.equal('Invalid Email/Password', scope.errMessage);
		});

		it('invalid email - error message should appear', function() {
			scope.user.email = "mail.com";
			scope.user.password = "1234";
			scope.login();
			assert.equal('Invalid Email/Password', scope.errMessage);
		});

		it('invalid email - error message should appear', function() {
			scope.user.email = "@mailcom";
			scope.user.password = "1234";
			scope.login();
			assert.equal('Invalid Email/Password', scope.errMessage);
		});

		it('invalid email - error message should appear', function() {
			scope.user.email = "mailcom";
			scope.user.password = "1234";
			scope.login();
			assert.equal('Invalid Email/Password', scope.errMessage);
		});

		it('invalid email - error message should appear', function() {
			scope.user.email = "test@@mail.com";
			scope.user.password = "1234";
			scope.login();
			assert.equal('Invalid Email/Password', scope.errMessage);
		});

		it('invalid email - error message should appear', function() {
			scope.user.email = "test@mail..com";
			scope.user.password = "1234";
			scope.login();
			assert.equal('Invalid Email/Password', scope.errMessage);
		});

		it('invalid password length - error message should appear', function() {
			scope.user.email = "testuser@mail.com";
			scope.user.password = "1";
			scope.login();
			assert.equal('Invalid Email/Password', scope.errMessage);
		});

		it('invalid email and password length - error message should appear', function() {
			scope.user.email = "@mail.com";
			scope.user.password = "1";
			scope.login();
			assert.equal('Invalid Email/Password', scope.errMessage);
		});

	});	
});