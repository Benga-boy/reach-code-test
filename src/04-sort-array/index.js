/**
 * LEVEL 1: Implement using Array.prototype.sort method and NPM packages (e.g.: check-types)
 *   - REQUIRED
 * LEVEL 2: Implement without using Array.prototype.sort method or libraries, without regard to efficiency
 *   - Not required, but bonus points awarded
 * LEVEL 3: Implement without using Array.prototype.sort method or libraries, efficiently
 *   - Not required, but major bonus points awarded
 */

// Average and worst case time complexity (Big-O) of my function is:
// Explain:

const check = require('check-types')

module.exports = function sortArray(arr) {
  // TODO
  if (!arr.every(num => Number.isInteger(num))) {
    throw new TypeError('Invalid Input')
  }
  let result = []
  for (let i = Math.min(...arr); i <= Math.max(...arr); i++) {
    arr.forEach(num => i === num ? result.push(i) : num)
  }
  return result
};
