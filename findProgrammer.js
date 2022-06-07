const findProgrammer = (input) => {
  if (input === undefined) {
    return new Error("Enter the array of employees");
  }
  const names = [];
  for (const i of input) {
    if (i.job === "programmer") {
      names.push(i.name);
    }
  }
  return names;
};

const findProgrammer2 = (employees) => {
  if (employees === undefined) {
    return new Error("Enter the array of employees");
  }
  return employees
    .filter((employee) => employee.job === "programmer")
    .map((employee) => employee.name);
};

const findProgrammer3 = (employees) => {
  if (employees === undefined) {
    return new Error("Enter the array of employees");
  }
  return employees.reduce((acc, employee) => {
    employee.job === "programmer" ? acc.push(employee.name) : acc;
    return acc;
  }, []);
};

const findProgrammer4 = (employees) => {
  if (employees === undefined) {
    return new Error("Enter the array of employees");
  }
  const names = [];
  employees.filter((employee) =>
    employee.job === "programmer" ? names.push(employee.name) : names
  );
  return names;
};

module.exports = {
  findProgrammer,
  findProgrammer2,
  findProgrammer3,
  findProgrammer4,
};
