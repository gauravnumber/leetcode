/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  const count = {}, countRansom = {};
  let counting = ransomNote.length;

  for (let c of magazine) {
    count[c] = (count[c] || 0) + 1;
  }

  for (let c of ransomNote) {
    countRansom[c] = (countRansom[c] || 0) + 1;
  }

  for (let c in countRansom) {
    if (!count.hasOwnProperty(c) || count[c] < countRansom[c]) return false;
  }

  return true;
};

// var canConstruct = function (ransomNote, magazine) {
//   magazine = [...magazine];

//   for (const letter of ransomNote) {
//     const index = magazine.indexOf(letter);

//     if (index < 0) {
//       return false;
//     }
//     magazine[index] = null;
//   }

//   return true;
// };

console.log(canConstruct("aa", "ab")); // => false
console.log(canConstruct("aa", "aab")); // => true
console.log(
  canConstruct("bg", "efjbdfbdgfjhhaiigfhbaejahgfbbgbjagbddfgdiaigdadhcfcj"),
); // => true
