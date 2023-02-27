function calculateBMI(weight, height) {
  height = height / 100;

  var bmi = weight / (height * height);

  bmi = bmi.toFixed(1);
  return bmi;
}

var weight = 70;
var height = 170;
var bmi = calculateBMI(weight, height);
console.log("Your BMI is: " + bmi);

calculateBMI(80, 160);
