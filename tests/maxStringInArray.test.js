const maxStringInArray = require("../maxStringInArray");

const arrayWithString = ["hgfff", "fhguj", "ghjfv", "rty", "fg", "bhhj"];

describe("maxStringInArray function", () => {
  test("should get argument array with string and return new array of strings with max length", () => {
    expect(maxStringInArray(arrayWithString)).toEqual([
      "hgfff",
      "fhguj",
      "ghjfv",
    ]);
  });
  test("should get argument empty array and return empty array", () => {
    expect(maxStringInArray([])).toEqual([]);
  });
  test('should call without argument and return error "This function called without argument"', () => {
    expect(() =>maxStringInArray()).toThrowError(new Error("This function called without argument"));
})
test('should call with argument array of numbers and return error "Argument is not array"', () => {
    expect(() =>maxStringInArray(23)).toThrowError(new Error("Argument is not array"));
})
test('should call with number argument and return error "Array element is not a type string"', () => {
    expect(() =>maxStringInArray([23, 564, 3456, 56])).toThrowError(new Error("Array element is not a type string"));
})
});
