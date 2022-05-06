function threeSum(nums) {
  let res = [], a, l, r, threeSum

  nums = nums.sort((a, b) => a - b)

  for (let i = 0; i < nums.length; i++) {
    a = nums[i]

    if (i > 0 && a === nums[i - 1]) continue

    l = i + 1
    r = nums.length - 1

    while (l < r) {
      threeSum = a + nums[l] + nums[r]

      if (threeSum > 0) {
        r--
      } else if (threeSum < 0) {
        l++
      } else {
        res.push([a, nums[l], nums[r]])
        l++

        while (nums[l] === nums[l - 1] && l < r)
          l++
      }
    }
  }

  return res
}

console.log(threeSum([-1, 0, 1, 2, -1, -4]))  // => [ [ -1, -1, 2 ], [ -1, 0, 1 ] ]
console.log(threeSum([])) // => []
console.log(threeSum([0])) // => []
console.log(threeSum([9, 1, 6, -2, 3, -5, 7, -10])) // => [ [ -10, 1, 9 ], [ -10, 3, 7 ], [ -5, -2, 7 ] ]

// Runtime: 250 ms, faster than 35.05% of JavaScript online submissions for 3Sum.
// Memory Usage: 52 MB, less than 88.91% of JavaScript online submissions for 3Sum.
// Next challenges:
// 3Sum Closest
// 4Sum
// 3Sum Smaller
