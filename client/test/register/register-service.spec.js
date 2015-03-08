describe('Company Registration Controller', function() {
	var http;
	var scope;
	var location;
	var RegService;

	beforeEach(module('register'));

	beforeEach(inject(function($rootScope, $location, _RegisterService_, _$httpBackend_) {
		http = _$httpBackend_;
		scope = $rootScope.$new();
		location = $location;
		RegService = _RegisterService_;
	}));

	describe('When reg for API call is invoked', function() {

		/**beforeEach(function() {
			http
				.when('POST', 'https://blue-jay.herokuapp.com/auth/signup')
				.respond(200, {name: 'register' });
		})

		afterEach(function() {
		    http.verifyNoOutstandingExpectation();
		    http.verifyNoOutstandingRequest();
		})

		it('http post should be called', function() {
			http.expectPOST('https://blue-jay.herokuapp.com/auth/signup');
		});**/
	});
});