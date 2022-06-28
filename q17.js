/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  if (!digits.length) return [];

  const map = new Map([
    ["2", ["a", "b", "c"]],
    ["3", ["d", "e", "f"]],
    ["4", ["g", "h", "i"]],
    ["5", ["j", "k", "l"]],
    ["6", ["m", "n", "o"]],
    ["7", ["p", "q", "r", "s"]],
    ["8", ["t", "u", "v"]],
    ["9", ["w", "x", "y", "z"]],
  ]);

  let res = [];

  function backtrack(str, index) {
    if (str.length == digits.length) {
      res.push(str);
    } else {
      const chars = map.get(digits[index]);
      for (let char of chars) {
        backtrack(str + char, index + 1);
      }
    }
  }

  backtrack("", 0);

  return res;
};

console.log(letterCombinations("23")); // => ["ad","ae","af","bd","be","bf","cd","ce","cf"]
console.log(letterCombinations("")); // => []
console.log(letterCombinations("2")); // => ["a", "b", "c"]
