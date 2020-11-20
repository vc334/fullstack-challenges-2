const valid = (email) => {
  // TODO: return true if the `email` string has the right pattern!
  return /.+@.+[.][a-z]{2,3}/.test(email);
};

module.exports = valid; // Do not remove.
