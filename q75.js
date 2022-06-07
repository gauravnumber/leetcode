/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// var sortColors = function (nums) {
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = 0; j < i; j++) {
//       if (nums[i] < nums[j]) {
//         [nums[j], nums[i]] = [nums[i], nums[j]]
//       }
//     }
//   }

//   console.log(nums)
// };

var sortColors = function (nums) {
  let left = 0;
  let right = nums.length - 1;
  let zero = 0;
  while (left <= right) {
    if (nums[left] === 0) {
      let temp = nums[zero];
      nums[zero] = nums[left];
      nums[left] = temp;
      left++;
      zero++;
    } else if (nums[left] === 2) {
      let temp = nums[right];
      nums[right] = nums[left];
      nums[left] = temp;
      right--;
    } else {
      left++
    }

  }

  console.log(nums)

  // return nums;
};


sortColors([2, 0, 2, 1, 1, 0])  // => [0,0,1,1,2,2]
sortColors([2, 0, 1])  // => [0, 1, 2]