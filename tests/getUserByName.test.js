const getUserByName = require("../getUserByName");

describe("find and return a user by his name", () => {
  test(`getUserByName([{name: 'Alex'}, {name: 'Bob'}, {name: 'Pit'}], 'Bob') should return {name: 'Bob'}`, () => {
    expect(
      getUserByName([{ name: "Alex" }, { name: "Bob" }, { name: "Pit" }], "Bob")
    ).toEqual({ name: "Bob" });
  });
  test(`getUserByName([{name: 'Alex'}, {name: 'Bob'}, {name: 'Pit'}]) should return 'Please enter a name to search for'`, () => {
    expect(
      getUserByName([{ name: "Alex" }, { name: "Bob" }, { name: "Pit" }])
        .message
    ).toBe("Please enter a name to search for");
  });
  test(`getUserByName('Bob') should return 'Please enter an array of users'`, () => {
    expect(getUserByName("Bob").message).toBe("Please enter an array of users");
  });
});
