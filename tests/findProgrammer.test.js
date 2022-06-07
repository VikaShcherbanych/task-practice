const {
  findProgrammer,
  findProgrammer2,
  findProgrammer3,
  findProgrammer4,
} = require("../findProgrammer");

describe("findProgrammer", () => {
  test('should return ["Don", "John", "Kent"]', () => {
    const employees = [
      { name: "Don", job: "programmer" },
      { name: "John", job: "programmer" },
      { name: "Kent", job: "programmer" },
    ];
    expect(findProgrammer(employees)).toEqual(["Don", "John", "Kent"]);
  });
  test("should return []", () => {
    const employees = [
      { name: "Don", job: "driver" },
      { name: "John", job: "singer" },
      { name: "Kent", job: "worker" },
    ];
    expect(findProgrammer([])).toEqual([]);
  });
  test("should return error", () => {
    expect(findProgrammer().message).toBe("Enter the array of employees");
  });
});

describe("findProgrammer2", () => {
  test('should return ["Don", "John", "Kent"]', () => {
    const employees = [
      { name: "Don", job: "programmer" },
      { name: "John", job: "programmer" },
      { name: "Kent", job: "programmer" },
    ];
    expect(findProgrammer2(employees)).toEqual(["Don", "John", "Kent"]);
  });
  test("should return []", () => {
    const employees = [
      { name: "Don", job: "driver" },
      { name: "John", job: "singer" },
      { name: "Kent", job: "worker" },
    ];
    expect(findProgrammer2([])).toEqual([]);
  });
  test("should return error", () => {
    expect(findProgrammer2().message).toBe("Enter the array of employees");
  });
});

describe("findProgrammer3", () => {
  test('should return ["Don", "John", "Kent"]', () => {
    const employees = [
      { name: "Don", job: "programmer" },
      { name: "John", job: "programmer" },
      { name: "Kent", job: "programmer" },
    ];
    expect(findProgrammer3(employees)).toEqual(["Don", "John", "Kent"]);
  });
  test("should return []", () => {
    const employees = [
      { name: "Don", job: "driver" },
      { name: "John", job: "singer" },
      { name: "Kent", job: "worker" },
    ];
    expect(findProgrammer3([])).toEqual([]);
  });
  test("should return error", () => {
    expect(findProgrammer3().message).toBe("Enter the array of employees");
  });
});

describe("findProgrammer4", () => {
  test('should return ["Don", "John", "Kent"]', () => {
    const employees = [
      { name: "Don", job: "programmer" },
      { name: "John", job: "programmer" },
      { name: "Kent", job: "programmer" },
    ];
    expect(findProgrammer4(employees)).toEqual(["Don", "John", "Kent"]);
  });
  test("should return []", () => {
    const employees = [
      { name: "Don", job: "driver" },
      { name: "John", job: "singer" },
      { name: "Kent", job: "worker" },
    ];
    expect(findProgrammer4([])).toEqual([]);
  });
  test("should return error", () => {
    expect(findProgrammer4().message).toBe("Enter the array of employees");
  });
});
