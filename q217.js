/**
 * @param {number[]} nums
 * @return {boolean}
 */
// var containsDuplicate = function (nums) {
//   const distinct = new Set(nums)

//   return distinct.size !== nums.length
// };

// var containsDuplicate = function(nums) {
//     const map = new Map()

//     for (let i = 0; i < nums.length; i++) {
//         if (map.has(nums[i])) return true

//         map.set(nums[i], true)
//     }

//     return false
// };
var containsDuplicate = function (nums) {
  const set = new Set();

  for (let i = 0; i < nums.length; i++) {
    if (set.has(nums[i])) return true;

    set.add(nums[i]);
  }

  return false;
};

console.log(containsDuplicate([1, 2, 3, 4])); //  =>  false
console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])); //  =>  true
// Runtime: 91 ms, faster than 84.78% of JavaScript online submissions for Contains Duplicate.
// Memory Usage: 51 MB, less than 47.17% of JavaScript online submissions for Contains Duplicate.
// Next challenges:
// Contains Duplicate II
// Contains Duplicate III
