const stringLength = require("./stringLength.js");

it("should return number", () => {
  const num = 5;

  expect(stringLength("hello")).toBe(num);
});
