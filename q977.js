/**
 * @param {number[]} nums
 * @return {number[]}
 */

// Naive approach
// var sortedSquares = function (nums) {
//     nums = nums.map(n => n * n)
//     nums.sort((a, b) => a - b)

//     return nums
// };

var sortedSquares = function (nums) {
  let n = nums.length,
    i = 0,
    j = n - 1,
    res = [];

  for (let k = n - 1; k >= 0; k--) {
    if (Math.abs(nums[i]) > Math.abs(nums[j])) {
      res[k] = nums[i] * nums[i];
      i++;
    } else {
      res[k] = nums[j] * nums[j];
      j--;
    }
  }

  return res;
};

console.log(sortedSquares([-4, -1, 0, 3, 10]));
