const hasValue = require("../hasValue");

const arrayofNumbers = [1, 2, 3, 4, 4, 10];
const arrayOfStrings = ["cat", "dog", "frog"];

describe("HasValue function", () => {
  test("should array includes 10 and return true", () => {
    expect(hasValue(10, arrayofNumbers)).toBe(true);
  });
  test("should array includes 20 and return false", () => {
    expect(hasValue(20, arrayofNumbers)).toBe(false);
  });
  test("should empty array includes 20 and return 0", () => {
    expect(hasValue(20, [])).toBe(0);
  });
  test(`should array includes 'cat' and return true`, () => {
    expect(hasValue("cat", arrayOfStrings)).toBe(true);
  });
});
