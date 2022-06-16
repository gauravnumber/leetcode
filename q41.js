/**
 * @param {number[]} nums
 * @return {number}
 */
// var firstMissingPositive = function(nums) {
//     for (let i = 0; i < nums.length; i++) {
//         if (!nums.includes(i + 1))
//             return i + 1
//     }

//     return nums.length + 1
// };

// var firstMissingPositive = function (nums) {
//   let i = 0;
//   while (i < nums.length) {
//     if (
//       nums[i] > 0 &&
//       nums[i] <= nums.length &&
//       nums[nums[i] - 1] !== nums[i]
//     ) {
//       [nums[nums[i] - 1], nums[i]] = [nums[i], nums[nums[i] - 1]];
//     } else {
//       i++;
//     }
//   }

//   // console.log(nums)

//   for (i = 0; i < nums.length; i++) {
//     if (nums[i] !== i + 1) return i + 1;
//   }
//   return i + 1;
// };

// var firstMissingPositive = function (nums) {
//     var map = new Map()

//     for (let i = 0; i < nums.length; i++) {
//         map.set(nums[i], nums[i])
//     }

//     let i
//     console.log(map)
//     for (i = 1; i <= nums.length; i++) {
//         if (!map.has(nums[i]))
//             return i
//     }

//     return i
// }

/**
 * @param {number[]} nums
 * @return {number}
 */

function firstMissingPositive(nums) {
  let i = 0;

  while (i < nums.length) {
    if (nums[i] > 0 && nums[i] < nums.length && nums[nums[i] - 1] !== nums[i]) {
      [nums[nums[i] - 1], nums[i]] = [nums[i], nums[nums[i] - 1]];
    } else {
      i++;
    }
  }

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== i + 1) return i + 1;
  }

  return i + 1;
}

console.log(firstMissingPositive([1, 2, 0])); //  =>  3
console.log(firstMissingPositive([3, 4, -1, 1])); //  =>  2
console.log(firstMissingPositive([7, 8, 9, 11, 12])); //  =>  1
console.log(firstMissingPositive([7, 8, 1, 2, 12])); //  =>  3
