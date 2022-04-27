function search(nums, target) {
  let l = 0, r = nums.length - 1, res = nums[0], m

  while (l <= r) {
    m = Math.floor((l + r) / 2)

    if (nums[m] === target) {
      return m
    }

    if (nums[l] <= nums[m]) {
      if (target > nums[m] || target < nums[l]) {
        l = m + 1
      }
      else {
        r = m - 1
      }
    } else {
      if (target < nums[m] || target > nums[r]) {
        r = m + 1
      } else {
        l = m - 1
      }
    }
  }

  return -1
}

console.log(search([4, 5, 6, 7, 0, 1, 2], 0))
console.log(search([4, 5, 6, 7, 0, 1, 2], 3))
console.log(search([-1], 0))