const getAgeAndSalary = (people) => {
  if (people.length === 0) return "There are no employees in the company";
  let youngest = people[0] ? people[0].age : Infinity;
  let totalSalary = 0;
  for (const p of people) {
    if (p.age < youngest) youngest = p.age;
    totalSalary += p.salary;
  }
  return youngest < 18 || youngest > 70
    ? "The employee has very young or old age"
    : `youngestAge: ${youngest}, totalSalary: ${totalSalary}`;
};

const getAgeAndSalary2 = (people) => {
  if (people.length === 0) return "There are no employees in the company";
  const acc = people.reduce(
    (acc, p) => {
      if (p.age < acc.youngest) {
        acc.youngest = p.age;
      }
      acc.totalSalary += p.salary;
      return acc;
    },
    { youngest: Infinity, totalSalary: 0 }
  );
  return acc.youngest < 18 || acc.youngest > 70
    ? "The employee has very young or old age"
    : `youngestAge: ${acc.youngest}, totalSalary: ${acc.totalSalary}`;
};

const getAgeAndSalary3 = (people) => {
  if (people.length === 0) return "There are no employees in the company";
  const youngest = people.sort((a, b) => a.age - b.age)[0].age;
  const totalSalary = people.reduce((acc, p) => acc + p.salary, 0);
  return youngest < 18 || youngest > 70
    ? "The employee has very young or old age"
    : `youngestAge: ${youngest}, totalSalary: ${totalSalary}`;
};

module.exports = { getAgeAndSalary, getAgeAndSalary2, getAgeAndSalary3 };
