/**
 * You can assume the input:
 *   - is a valid string
 *   - contains words that are divided by a single space
 */

// Average and worst case time complexity (Big-O) of my function is:
// Explain:

module.exports = function reverseWordsInSentence(input) {
  // TODO
  input = input.split(' ')
  // return input.map(word => word.split('').reverse().join('')).join(' ')
  let reversedWord = []
  for (let i = 0; i < input.length; i++) {
    reversedWord.push(input[i].split('').reverse().join(''))
  }
  return reversedWord.join(' ')
};

