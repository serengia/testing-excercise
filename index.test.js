const { expect, it } = require("@jest/globals");

const {
  reverseString,
  stringLength,
  Calculator,
  capitalize,
} = require("./index");

// MULTIPLE CONDITIONS TESTS bunched together
it("char length should be btwn 0 and 10", () => {
  const value1 = "Hello";
  const value2 = "James";

  expect(stringLength(value1)).toBeGreaterThan(0);
  expect(stringLength(value2)).toBeLessThanOrEqual(10);
});

it("reverse string checker", () => {
  const testInput = "james t";
  const testOutput = "t semaj";

  expect(reverseString(testInput)).toBe(testOutput);
});

// CLASS METHODS TESTS => BUNDLED TOGETHER
describe("calculator checker", () => {
  const num1 = 4;
  const num2 = 2;
  const calculator = new Calculator(num1, num2);

  it("add test", () => {
    const expectedOutput = num1 + num2;
    expect(calculator.add()).toBe(expectedOutput);
  });

  it("subtract test", () => {
    const expectedOutput = num1 - num2;
    expect(calculator.subtract()).toBe(expectedOutput);
  });

  it("divide test", () => {
    const expectedOutput = num1 / num2;
    expect(calculator.divide()).toBe(expectedOutput);
  });

  it("multiply test", () => {
    const expectedOutput = num1 * num2;
    expect(calculator.multiply()).toBe(expectedOutput);
  });
});

// CAPITALIZE FIRST LATTER TEST
it("capitalize first letter of a string", () => {
  const testInput = "serengia";
  const testOutput = "Serengia";
  expect(capitalize(testInput)).toBe(testOutput);
});
