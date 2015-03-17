// describe('Checkin-Services',function(){
// 	beforeEach(module('auth'));
//   beforeEach(module('checkin'));

//   var scope, 
//       CheckinService,
//       httpBackend,
//       socket,
//       submitapi;

//   beforeEach(inject(function(_$httpBackend_, _socket_, $rootScope, _CheckinService_){
//     scope = $rootScope.$new();
//     // socket = _socket_;
//     httpBackend = _$httpBackend_;
//     CheckinService = _CheckinService_;
//   }));

//   it('Should be defined',function(){
//     expect(CheckinService).to.be.defined;
//   });

//   beforeEach(function(){
//     submitapi = 'apu/form/patient/';
//     httpBackend.whenPOST(submitapi).respond(200);
//     getFormsapi = '/api/form/template/company'+id;
//     httpBackend.whenGET(getFormsapi).respond(200);
//     getThemesapi = '/api/'+id+'/theme';
//     httpBackend.whenGET(getThemesapi).respond(200);
//   });

//   describe('Testing getTheme() function',function(){
//     it('',function(){
//       httpBackend.expectGET(getThemeapi);
//     });
//     it('Mock calls should return given value',function(){
//       sinon.stub(CheckinService,'getTheme').returns(1);
//       CheckinService.getTheme();
//       expect(CheckinService.getTheme()).to.equal(1);
//     });
//   });
  
//   describe('Testing getForms() function',function(){
//     it('',function(){
//       httpBackend.expectGET(getFormsapi);
//     });
//     it('Mock calls should return given value',function(){
//       sinon.stub(CheckinService,'getForms').returns(1);
//       CheckinService.getForms();
//       expect(CheckinService.getForms()).to.equal(1);
//     });
//   });

//   describe('Testing submitForm() function',function(){
//     it('',function(){
//       httpBackend.expectPOST(submitapi);
//     });
//     it('Mock calls should return given value',function(){
//       sinon.stub(CheckinService,'submitForm').returns(1);
//       CheckinService.submitForm();
//       expect(CheckinService.submitForm()).to.equal(1);
//     });
//   });
// });