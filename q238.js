// 238. Product of Array Except Self
// Medium

// Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

// You must write an algorithm that runs in O(n) time and without using the division operation.

// Example 1:

// Input: nums = [1,2,3,4]
// Output: [24,12,8,6]

// Example 2:

// Input: nums = [-1,1,0,-3,3]
// Output: [0,0,9,0,0]

// Constraints:

//     2 <= nums.length <= 105
//     -30 <= nums[i] <= 30
//     The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

// Follow up: Can you solve the problem in O(1) extra space complexity? (The output array does not count as extra space for space complexity analysis.)

/**
 * @param {number[]} nums
 * @return {number[]}
 */
// var productExceptSelf = function (nums) {
//   return nums.map((v, i, arr) => {
//     return arr.filter((v, ai) => ai !== i).reduce((a, b) => a * b, 1)
//   })
// };

var productExceptSelf = function (nums) {
  let res = nums.slice(),
    postfix = 1;

  for (let i = 1; i < nums.length; i++) {
    res[i] *= res[i - 1];
  }

  for (let i = nums.length - 1; i > 0; i--) {
    res[i] = postfix;
    res[i] *= res[i - 1];
    postfix *= nums[i];
  }

  res[0] = postfix;

  return res;
};

console.log(productExceptSelf([1, 2, 3, 4])); // => [24,12,8,6]
console.log(productExceptSelf([-1, 1, 0, -3, 3])); // => [0,0,9,0,0]
console.log(productExceptSelf([0, 0])); // => [0,0]

// Runtime: 107 ms, faster than 85.82% of JavaScript online submissions for Product of Array Except Self.
// Memory Usage: 56.1 MB, less than 21.44% of JavaScript online submissions for Product of Array Except Self.
// Next challenges:
// Trapping Rain Water
// Maximum Product Subarray
// Paint House II
// Minimum Difference in Sums After Removal of Elements
