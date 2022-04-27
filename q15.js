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

console.log(threeSum([-1, 0, 1, 2, -1, -4]))
console.log(threeSum([]))
console.log(threeSum([0]))