const maxProduct = nums => {
  let res = Math.max(...nums), curMin = 1, curMax = 1, n

  for (let i = 0; i < nums.length; i++) {
    n = nums[i]

    let max = curMax * n
    let min = curMin * n

    curMax = Math.max(max, min, n)
    curMin = Math.min(max, min, n)

    res = Math.max(res, curMax)
  }

  return res
}


console.log(maxProduct([2, 3, -2, 4])) // => 6
console.log(maxProduct([-2, 0, -1])) // => 0
console.log(maxProduct([-3, -1, -1])) // => 3
console.log(maxProduct([-4, -3, -2])) // => 12

// Runtime: 69 ms, faster than 81.60% of JavaScript online submissions for Maximum Product Subarray.
// Memory Usage: 42.9 MB, less than 42.74% of JavaScript online submissions for Maximum Product Subarray.
// Next challenges:
// House Robber
// Maximum Product of Three Numbers
// Subarray Product Less Than K