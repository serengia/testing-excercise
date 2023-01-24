// String length function
const stringLength = (string) => {
  const count = string.length;

  if (count < 1 || count > 10) {
    throw new Error("Out of bound");
  }

  return count;
};

exports.stringLength = stringLength;

// Reverse string function
const reverseString = (str) => {
  return str.split("").reverse().join("");
};

exports.reverseString = reverseString;

// Calculator class
class Calculator {
  constructor(num1, num2) {
    this.num1 = num1;
    this.num2 = num2;
  }

  add() {
    return this.num1 + this.num2;
  }

  subtract() {
    return this.num1 - this.num2;
  }

  divide() {
    return this.num1 / this.num2;
  }

  multiply() {
    return this.num1 * this.num2;
  }
}

exports.Calculator = Calculator;

// Capitalize function
const capitalize = (string) => {
  return string[0].toUpperCase() + string.slice(1);
};

exports.capitalize = capitalize;
