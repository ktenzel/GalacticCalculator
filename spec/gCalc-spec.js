import { gCalc } from './../js/gCalc.js';

describe('gCalc', function() {
let reusableDate;
let testDate;

  beforeEach(function(){
    reusableDate = new gCalc("1991-10-31", 3)
    testDate = new gCalc("2018-02-14")
  });

  it('should test a users age from and input date of birth to right now in seconds', function() {
    expect(reusableDate.determineAgeSeconds(testDate)).toEqual(829699200)
  });

  it('should test a users age from and input date of birth to right now in years', function() {
    expect(reusableDate.timeInYears(testDate)).toEqual('26.310')
  });
  it('should test a users age from and input date of birth to right now for the planet Mercury', function() {
    expect(reusableDate.determineAgeMercury(testDate)).toEqual('109.623')
  });

  it('should test a users age from and input date of birth to right now for the planet Venus', function() {
      expect(reusableDate.determineAgeVenus(testDate)).toEqual('42.435')
  });

  it('should test a users age from and input date of birth to right now for the planet Mars', function() {
    expect(reusableDate.determineAgeMars(testDate)).toEqual('13.994')
  });

  it('should test a users age from and input date of birth to right now for the planet Jupiter', function() {
    expect(reusableDate.determineAgeJupiter(testDate)).toEqual('2.218')
  });


  it('should test a users age from input expected age', function() {
    debugger;
    expect(reusableDate.lifeLeft(testDate)).toEqual("You've got 3 years to go.")
  });
});
