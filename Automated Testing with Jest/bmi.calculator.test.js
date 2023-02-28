// Test case 1: BMI calculation is correct
const calculateBMI = require("./bmi_calculator.js");

test("Checks if the bmi calculates correctly ", () => {
  expect(calculateBMI(70, 170)).toBe("24.2");
});

// Test case 2: BMI calculation handles zero values
test("handles zero values", () => {
  expect(calculateBMI(0, 0)).toBe("NaN");
});

// Test case 3: BMI calculation handles negative values
test("handles negative values", () => {
  expect(calculateBMI(-70, -170)).toBe("-24.2");
});
