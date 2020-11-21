const splitTheBill = (group) => {
  // TODO: implement the function and return an Object
  let total = 0;
  let individuals = 0;

  Object.keys(group).forEach((key) => {
    const value = group[key];
    total += value;
    individuals += 1;
  });

  const perPerson = total / individuals;

  const group2 = group;

  Object.keys(group2).forEach((key) => {
    const value = group2[key];
    const newValue = value - perPerson;
    group2[key] = newValue;
  });

  return group2;
};

module.exports = splitTheBill; // Do not remove this line.
