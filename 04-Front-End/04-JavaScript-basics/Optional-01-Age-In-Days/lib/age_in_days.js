const ageInDays = (day, month, year) => {
  // TODO: Implement the method and return an integer
  const birthday = new Date(year, month - 1, day);
  const age = new Date() - birthday;
  return Math.round((age / 1000) / 86400);
};

module.exports = ageInDays; // Do not remove. We need this for the spec to know about your method.
