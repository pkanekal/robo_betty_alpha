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
			expect(scope.user.email).to.equal('');
			//chaijs assertion style
			//assert.isNull(scope.user.email); // cleaner? 
		});
		
		it('user password must be initially empty', function() {
			expect(scope.user.password).to.equal('');
			//chaijs assertion style
			//assert.isNull(scope.user.password); // cleaner? 
		});

		it('error message (errMessage) must be initially empty', function() {
			expect(scope.errMessage).to.equal('');
			//chaijs assertion style
			//assert.isNull(scope.errMessage); // cleaner? 			
		});

	});

	//testing login()
	// this needs thorough testing - many ways to break login()
	describe('Testing Login function - user is playing nice', function() {
		
		beforeEach(function() {
			scope.user.email = 'testemail@mail.com';
			scope.user.password = 'qwerty';
			scope.errMessage = '';
		});

	});

	describe('Testing Login function - user is NOT playing nice', function() {
		
		// beforeEach(function() {
		// 	scope.user.email = '@mail.com';
		// 	scope.user.password = '!@#';
		// 	scope.errMessage = '';
		// });

		it('invalid email error message should appear', function() {
			scope.user.email = "@mail.com";
			scope.user.password = "1234";
			scope.login();
			expect(scope.errMessage).to.equal('Invalid Email/Password');
			//assert.equal('Invalid Email/Password', scope.errMessage);
		});

		it('invalid password error message should appear', function() {
			scope.user.email = "testuser@mail.com"
			scope.user.password = "1";
			scope.login();
			expect(scope.errMessage).to.equal('Invalid Email/Password');
			//assert.equal('Invalid Email/Password', scope.errMessage);
		});
	});	
});









