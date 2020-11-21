const splitTheBill = (group) => {
  // TODO: implement the function and return an Object
  let total = 0;
  let individuals = 0;
  const balance = {};

  Object.keys(group).forEach((key) => {
    const value = group[key];
    total += value;
    individuals += 1;
  });

  const perPerson = total / individuals;

  Object.keys(group).forEach((key) => {
    balance[key] = group[key] - perPerson;
  });

  return balance;
};

module.exports = splitTheBill; // Do not remove this line.
