/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
  let curSum = 0,
    maxS = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      curSum = 0;
    } else {
      curSum++;
    }

    maxS = Math.max(maxS, curSum);
  }

  return maxS;
};
