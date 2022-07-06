/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  const nums = nums1.concat(nums2);
  const n = nums.length;
  nums.sort((a, b) => a - b);

  if (n % 2 !== 0) {
    return nums[Math.floor(n >> 1)];
  }

  return (nums[n >> 1] + nums[(n >> 1) - 1]) / 2;
};

// n >> 1 === n / 2

console.log(
  findMedianSortedArrays(
    [1, 3],
    [2],
  ),
); // => 2.00000

console.log(
  findMedianSortedArrays(
    [1, 2],
    [3, 4],
  ),
); // => 2.50000
