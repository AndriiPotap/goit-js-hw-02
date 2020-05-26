'use strict';

const findLongestWord = function (string) {
    const wordFromString = string.split(' ');
  
    let maxLongestWord = 'a';
    for (let word in wordFromString) {
      if (wordFromString[word].split('').length > maxLongestWord.split('').length) {
        maxLongestWord = wordFromString[word];
      }
    }
    return maxLongestWord;
  };
  
  console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'
  
  console.log(findLongestWord('Google do a roll')); // 'Google'
  
  console.log(findLongestWord('May the force be with you')); // 'force'