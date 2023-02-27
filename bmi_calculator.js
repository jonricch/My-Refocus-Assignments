function calculateBMI(weight, height) {
  height = height / 100; //arrange

  var bmi = weight / (height * height); //arrange

  bmi = bmi.toFixed(1); //act
  return bmi; // assert
}

var weight = 70; //arrange
var height = 170; //arrange
var bmi = calculateBMI(weight, height); //act
console.log("Your BMI is: " + bmi); // assert

calculateBMI(80, 160); //assert
