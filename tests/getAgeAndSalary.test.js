const {
  getAgeAndSalary,
  getAgeAndSalary2,
  getAgeAndSalary3,
} = require("../getAgeAndSalary");

describe("getAgeAndSalary", () => {
  test("should return youngestAge: 20, totalSalary: 300", () => {
    expect(
      getAgeAndSalary([
        { age: 20, salary: 100 },
        { age: 30, salary: 200 },
      ])
    ).toBe("youngestAge: 20, totalSalary: 300");
  });
  test("should return The employee has very young or old age", () => {
    expect(
      getAgeAndSalary([
        { age: 10, salary: 100 },
        { age: 30, salary: 200 },
      ])
    ).toBe("The employee has very young or old age");
  });
  test("should return", () => {
    expect(getAgeAndSalary([])).toBe("There are no employees in the company");
  });
});

describe("getAgeAndSalary2", () => {
  test("should return youngestAge: 20, totalSalary: 300", () => {
    expect(
      getAgeAndSalary2([
        { age: 20, salary: 100 },
        { age: 30, salary: 200 },
      ])
    ).toBe("youngestAge: 20, totalSalary: 300");
  });
  test("should return The employee has very young or old age", () => {
    expect(
      getAgeAndSalary2([
        { age: 10, salary: 100 },
        { age: 30, salary: 200 },
      ])
    ).toBe("The employee has very young or old age");
  });
  test("should return", () => {
    expect(getAgeAndSalary2([])).toBe("There are no employees in the company");
  });
});

describe("getAgeAndSalary3", () => {
  test("should return youngestAge: 20, totalSalary: 300", () => {
    expect(
      getAgeAndSalary3([
        { age: 20, salary: 100 },
        { age: 30, salary: 200 },
      ])
    ).toBe("youngestAge: 20, totalSalary: 300");
  });
  test("should return The employee has very young or old age", () => {
    expect(
      getAgeAndSalary3([
        { age: 10, salary: 100 },
        { age: 30, salary: 200 },
      ])
    ).toBe("The employee has very young or old age");
  });
  test("should return", () => {
    expect(getAgeAndSalary3([])).toBe("There are no employees in the company");
  });
});
