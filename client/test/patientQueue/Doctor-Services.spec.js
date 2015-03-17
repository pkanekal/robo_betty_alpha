describe('Doctor-Services',function(){
	beforeEach(module('ngCookies'));
  beforeEach(module('smart-table'));
  beforeEach(module('ui.bootstrap'));
  beforeEach(module('ui.mask'));
  beforeEach(module('dashboard'));

  var scope, 
  httpBackend, 
  doctorService;

  beforeEach(inject(function(_DoctorService_,$rootScope,_$httpBackend_,$http){
    doctorService = _DoctorService_;
    scope = $rootScope.$new();
    httpBackend = _$httpBackend_;
    http = $http;
  }));

  it('Should be defined',function(){
    expect(doctorService).to.be.defined;
  });

  beforeEach(function(){
    doctorService.doctorsList = 
    [
      {doctor:'A'},
      {doctor:'B'}
    ];
  });

  describe('Testing getAllDoctors()',function(){
    it('Mock calls return given value',function(){
      sinon.stub(doctorService,'getAllDoctors').returns(1);
      doctorService.getAllDoctors();
      expect(doctorService.getAllDoctors()).to.equal(1);
    });
    it('Should have values given',function(){
      doctorService.getAllDoctors();
      console.log(doctorService.doctorsList);
      expect(doctorService.doctorsList[0]).to.deep.equal({doctor: 'A'});
      expect(doctorService.doctorsList[1]).to.deep.equal({doctor: 'B'});
      expect(doctorService.doctorsList.length).to.equal(2);
    });
  });

  describe('Testing getRandomDoctor()',function(){
    it('Mock calls return given value',function(){
      sinon.stub(doctorService,'getRandomDoctor').returns(1);
      doctorService.getRandomDoctor();
      expect(doctorService.getRandomDoctor()).to.equal(1);
    });
  });


});