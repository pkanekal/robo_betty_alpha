describe('Company Registration Controller', function() {
	var RegCtrl;
	var http;
	var scope;
	var location;
	var RegService;

	beforeEach(module('register'));
	beforeEach(inject(function($rootScope, $controller) {
		//console.log("Rootscope : " + $rootScope);
		//console.log("Location : " + $location);
		//console.log("Reg Service : " + _RegisterService_);
		//console.log("Controller : " + $controller);
		//console.log("HTTP Backend : " + _$httpBackend_);
		//http = _$httpBackend_;
		scope = $rootScope.$new();
		//location = $location;
		//RegService = _RegisterService_;
		//http
		//	.when('POST', '/auth/signup')
		//	.respond(200, {name: 'mockregister' });
		RegCtrl = $controller('RegisterController', { $scope : scope});
	}));

	describe('RegCtrl', function() {
		it('should exist', function() {
			expect(RegCtrl.name).to.be.defined;
			//expect(RegCtrl.name.email).to.equal('mockregister');
		});
		it('email and password should be initially empty strings', function() {
			expect(scope.user.email).to.equal('');
			expect(scope.user.password).to.equal('');
		});
		it('err and check should be initially false', function() {
			expect(scope.err).to.equal(false);
			expect(scope.check).to.equal(false);
		});	
	});

	describe('When reg() is called with valid information', function() {

		beforeEach(function() {
			scope.user.email = 'testuser'
			scope.user.password = 'testpassword';
			scope.pass = 'testpassword';
		});

		it('email and password should not be empty', function() {
			expect(scope.user.email).to.not.equal('');
			expect(scope.user.password).to.not.equal('');
		});

		it('password and confirm password should be equal', function() {
			expect(scope.user.password).to.equal(scope.pass);
		});

		it('password length should be greater than 4', function() {
			expect(scope.user.password).to.have.length.above(3);
		});

	});

	describe('When reg() is called with invalid information', function() {

		beforeEach(function() {
			scope.user.email = ''
			scope.user.password = 'te';
			scope.pass = 'test';
		});

		it('email should be empty', function() {
			expect(scope.user.email).to.equal('');
		});

		it('password and confirm password are not equal', function() {
			expect(scope.user.password).to.not.equal(scope.pass);
		});

		it('password length is less than 4', function() {
			expect(scope.user.password).to.have.length.below(4);
		});

	});
});