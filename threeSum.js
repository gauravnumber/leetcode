function threeSum(nums) {
  let l, r, res = [], sum
  nums = nums.sort((a, b) => a - b)

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === nums[i - 1]) continue

    l = i + 1
    r = nums.length - 1

    while (l < r) {
      sum = nums[i] + nums[l] + nums[r]

      if (sum > 0) {
        r--
      } else if (sum < 0) {
        l++
      } else {
        res.push([nums[i], nums[l], nums[r]])
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