// 53. Maximum Subarray
// Easy

// Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

// A subarray is a contiguous part of an array.

// Example 1:

// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6
// Explanation: [4,-1,2,1] has the largest sum = 6.

// Example 2:

// Input: nums = [1]
// Output: 1

// Example 3:

// Input: nums = [5,4,-1,7,8]
// Output: 23

// Constraints:

//     1 <= nums.length <= 105
//     -104 <= nums[i] <= 104

// Follow up: If you have figured out the O(n) solution, try coding another solution using the divide and conquer approach, which is more subtle.

/**
 * @param {number[]} nums
 * @return {number}
 */
// var maxSubArray = function (nums) {
//   let maxSub = nums[0], curSum = 0

//   for (let i = 0; i < nums.length; i++) {
//     if (curSum < 0) curSum = 0

//     curSum += nums[i]
//     maxSub = Math.max(maxSub, curSum)
//   }

//   return maxSub
// };

/**
 * @param {number[]} nums
 * @return {number}
 */
//Lets use two pointer approach
var maxSubArray = function (nums) {
  let global_max = Number.MIN_SAFE_INTEGER;
  let local_max = 0;

  for (let i = 0; i < nums.length; i++) {
    local_max = Math.max(nums[i], local_max + nums[i]);
    if (local_max > global_max) {
      global_max = local_max;
    }
    if (local_max < 0) {
      local_max = 0;
    }
  }
  return global_max;
};

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // => 6
console.log(maxSubArray([1])); // => 1
console.log(maxSubArray([5, 4, -1, 7, 8])); // => 23

// Runtime: 85 ms, faster than 82.29% of JavaScript online submissions for Maximum Subarray.
// Memory Usage: 50.6 MB, less than 39.81% of JavaScript online submissions for Maximum Subarray.
// Next challenges:
// Maximum Product Subarray
// Degree of an Array
// Longest Turbulent Subarray
// Maximum Absolute Sum of Any Subarray
// Maximum Subarray Sum After One Operation
