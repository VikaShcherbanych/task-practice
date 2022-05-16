const findObjectProperty = require("../findObjectProperty");

const user = {
  name: "Bob",
  age: 25,
  isOnline: true,
};

describe("FindObjectProperty function", () => {
  test(`should object 'user' has 'name' property and return 'Property is present in the object'`, () => {
    expect(findObjectProperty("name", user)).toBe(
      "Property is present in the object"
    );
  });
  test(`should object 'user' has 'age' property and return 'Property is present in the object'`, () => {
    expect(findObjectProperty("age", user)).toBe(
      "Property is present in the object"
    );
  });
  test(`should object 'user' has 'lastName' property and return 'Property is not present in the object'`, () => {
    expect(findObjectProperty("lastname", user)).toBe(
      "Property is not present in the object"
    );
  });
});
