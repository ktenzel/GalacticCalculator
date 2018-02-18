export class gCalc {
  constructor(birthDate, lifeExpectancy) {
    this.birthDate = birthDate;
    this.lifeExpectancy = lifeExpectancy;
    this.yearMercury = 0.24;
    this.yearVenus = 0.62;
    this.yearMars = 1.88;
    this.yearJupiter = 11.86;
  }


  getDate(){
  this.currentDate = new Date();
  }

  determineAgeSeconds(currentDate) {
      let today = new Date(currentDate.birthDate);
      let born = new Date(this.birthDate)
      let myAge = (born.getTime() - today.getTime()) / 1000;
      return Math.abs(Math.round(myAge));
  }

  timeInYears(currentDate){
    let years = (this.determineAgeSeconds(currentDate) / 31536000).toFixed(3);
    return years;
  }

  lifeLeft(currentDate){
    let myAge = (this.determineAgeSeconds(currentDate)).toFixed(3);
    myAge = Math.abs(Math.round(myAge) / 31536000).toFixed(3);
    let timeLeft = this.lifeExpectancy - myAge;
    if (timeLeft > 0){
      return ("You've got " + Math.abs(timeLeft) + " years to go.");
    } else {
      return ("You passed the life expectancy " + Math.abs(timeLeft) + " years ago.");
    }
  }
  determineAgeMercury(currentDate){
    let yearMercury = (this.determineAgeSeconds(currentDate) / 31536000 / this.yearMercury).toFixed(3);
    return yearMercury;

  }

  determineAgeVenus(currentDate){
    let yearsVenus = (this.determineAgeSeconds(currentDate) / 31536000 / this.yearVenus).toFixed(3);
    return yearsVenus;
  }

  determineAgeMars(currentDate){
    let yearMars = (this.determineAgeSeconds(currentDate) / 31536000 / this.yearMars).toFixed(3);
    return yearMars;
  }

  determineAgeJupiter(currentDate){
    let yearJupiter = (this.determineAgeSeconds(currentDate) / 31536000 / this.yearJupiter).toFixed(3);
    return yearJupiter;
  }
};
