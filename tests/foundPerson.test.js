const functions = require("../foundPerson");

describe("foundPerson", () => {
  test("should return Don", () => {
    expect(functions.foundPerson(["Don", "John", "Kent"])).toBe("Don");
  });
  test("should return John", () => {
    expect(functions.foundPerson(["John", "Don", "Kent"])).toBe("John");
  });
  test("should return Kent", () => {
    expect(functions.foundPerson(["Kent", "John", "Don"])).toBe("Kent");
  });
  test("should return empty string", () => {
    expect(functions.foundPerson(["cdv", "dgdf", "fsdf"])).toBe("");
  });
  test("should return empty string", () => {
    expect(functions.foundPerson([])).toBe("");
  });
});

describe("foundPerson2", () => {
  test("should return Don", () => {
    expect(functions.foundPerson2(["Don", "John", "Kent"])).toBe("Don");
  });
  test("should return John", () => {
    expect(functions.foundPerson2(["John", "Katy", "Kent"])).toBe("John");
  });
  test("should return Kent", () => {
    expect(functions.foundPerson2(["Kent", "Mike", "Din"])).toBe("Kent");
  });
  test("should return empty string", () => {
    expect(functions.foundPerson2(["Den", "Teddy", "Joe"])).toBe("");
  });
  test("should return empty string", () => {
    expect(functions.foundPerson2([])).toBe("");
  });
});

describe("foundPerson3", () => {
  test("should return Don", () => {
    expect(functions.foundPerson3(["Don", "John", "Kent"])).toBe("Don");
  });
  test("should return John", () => {
    expect(functions.foundPerson3(["John", "Katy", "Kent"])).toBe("John");
  });
  test("should return Kent", () => {
    expect(functions.foundPerson3(["Kent", "Mike", "Din"])).toBe("Kent");
  });
  test("should return empty string", () => {
    expect(functions.foundPerson3(["Den", "Teddy", "Joe"])).toBe("");
  });
  test("should return empty string", () => {
    expect(functions.foundPerson3([])).toBe("");
  });
});
