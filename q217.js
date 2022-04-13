/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  const distinct = new Set(nums)

  return distinct.size !== nums.length
};

// Runtime: 91 ms, faster than 84.78% of JavaScript online submissions for Contains Duplicate.
// Memory Usage: 51 MB, less than 47.17% of JavaScript online submissions for Contains Duplicate.
// Next challenges:
// Contains Duplicate II
// Contains Duplicate III