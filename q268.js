function missingNumber(nums) {
  let res = nums.length

  for (let i = 0; i < nums.length; i++) {
    res += i - nums[i]
  }

  return res
}

console.log(missingNumber([3, 0, 1])) // => 2
console.log(missingNumber([0, 1]))  // => 2
console.log(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1])) // => 8

// Runtime: 106 ms, faster than 40.04% of JavaScript online submissions for Missing Number.
// Memory Usage: 44.3 MB, less than 66.48% of JavaScript online submissions for Missing Number.