/**
 * @param {number[]} citations
 * @return {number}
 */

// Time Complexity: O(nlog(n) + n)
// Space Complexity: O(1)
// This is not Counting Sort

var hIndex = function (citations) {
  const n = citations.length;
  citations.sort((a, b) => a - b);

  for (let i = 0; i < citations.length; i++) {
    let result = citations.length - i;
    if (result <= citations[i]) {
      return result;
    }
  }

  return 0;
};

console.log(hIndex([3, 0, 6, 1, 5])); // => 3
console.log(hIndex([1, 3, 1])); // => 1
