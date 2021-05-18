// You can assume the input is an integer

// Average and worst case time complexity (Big-O) of my function is:
// Explain:

module.exports = function createBase(integer) {
  // TODO
  if (integer < 0) {
    return (n) => n - -integer
  } else if (integer > 0) {
    return (x) => x + integer
  }
};
