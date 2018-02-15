import { gCalc } from './../js/gCalc.js';


$(document).ready(function() {
  $("#age").submit(function(event){
    event.preventDefault();
    let birthDate = $('#birthDate').val();
    let currentDate = new Date();
    let month = currentDate.getMonth() + 1;
    let currentGCalc = new gCalc(currentDate.getFullYear() + "-" + month + "-" + currentDate.getDate());
    debugger;
    let lifeExpectancy = parseInt($('#expectancy').val());
    let myAge = new gCalc(birthDate, lifeExpectancy);
    let output = myAge.determineAgeSeconds(currentGCalc);
    let outputYears = myAge.timeInYears(currentGCalc);
    let outputMercury = myAge.determineAgeMercury(currentGCalc);
    let outputVenus = myAge.determineAgeVenus(currentGCalc);
    let outputMars = myAge.determineAgeMars(currentGCalc);
    let outputJupiter = myAge.determineAgeJupiter(currentGCalc);
    let outputExpectedLife = myAge.lifeLeft(currentGCalc);


    $('#result').text(output + " seconds old right now.");
    $('#resultYears').text(outputYears + " years right now on earth.");
    $('#resultMercury').text("You are " + outputMercury + " Mercury years old.");
    $('#resultVenus').text("You are " + outputVenus + " Venus years old.");
    $('#resultMars').text("You are " + outputMars + " Mars years old.");
    $('#resultJupiter').text("You are " + outputJupiter + " Jupiter years old.");
    $('#outputExpectedLife').text(outputExpectedLife);
  });
});
