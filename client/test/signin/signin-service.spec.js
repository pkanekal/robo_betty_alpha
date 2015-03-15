describe('SigninService', function() {

	var SigninService, TokenInjector;

	beforeEach(module('signin'));

	beforeEach(inject(function(_SigninService_) {
	    SigninService = _SigninService_;
  	}));

	describe('When making http requests', function() {
		var http, httpBackend, loginURL, credentials, token;

		// inject before each test case
		beforeEach(inject(function(_$http_, _$httpBackend_) {
			http = _$http_;
			httpBackend = _$httpBackend_;
		}));

		// setup vars before each test case
		beforeEach(function() {
			loginURL = '/auth/login';
			credentials = {
				email: 'test@mail.com',
				password: 'test'
			};
			token = 'token';

			httpBackend.whenPOST(loginURL, credentials)
        		.respond(200, {token: token});
		});

		// verifications after each test case
		afterEach(function() {
	     	httpBackend.verifyNoOutstandingExpectation();
	      	httpBackend.verifyNoOutstandingRequest();
   		});

		it('Should POST to the api route', function() {
	      	httpBackend.expectPOST(loginURL);
	      	SigninService.login(credentials);
	      	httpBackend.flush();
    	});
	});
	
});