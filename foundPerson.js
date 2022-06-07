function foundPerson(people) {
  for (let i = 0; i < people.length; i++) {
    if (people[i] === "Don") {
      return "Don";
    }
    if (people[i] === "John") {
      return "John";
    }
    if (people[i] === "Kent") {
      return "Kent";
    }
  }
  return "";
}

const foundPerson2 = (people) => {
  const names = people.map((name) => name);
  return names.includes("Don")
    ? "Don"
    : names.includes("John")
    ? "John"
    : names.includes("Kent")
    ? "Kent"
    : "";
};

const foundPerson3 = (people) => {
  return (
    people.find(
      (name) => name === "Don" || name === "John" || name === "Kent"
    ) || ""
  );
};

const functions = { foundPerson, foundPerson2, foundPerson3 };

module.exports = functions;
