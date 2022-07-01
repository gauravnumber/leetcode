/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

// Time Complexity: O(N * log(N))
// Space Complexity: O(1)

var findKthLargest = function (nums, k) {
  const n = nums.length;
  nums.sort((a, b) => a - b);
  return nums[n - k];
};

console.log(findKthLargest(
  [3, 2, 1, 5, 6, 4],
  2,
)); // => 5

console.log(findKthLargest(
  [3, 2, 3, 1, 2, 4, 5, 5, 6],
  4,
)); // => 4
