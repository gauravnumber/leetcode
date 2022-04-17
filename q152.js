const maxSubArray = nums => {
  let res = Math.max(...nums), curMin = 1, curMax = 1, n


  for (let i = 0; i < nums.length; i++) {
    n = nums[i]

    curMax = Math.max(curMax * n, curMin * n, n)
    curMin = Math.min(curMax * n, curMin * n, n)

    res = Math.max(res, curMax)
  }

  return res
}


console.log(maxSubArray([2, 3, -2, 4]))
console.log(maxSubArray([-2, 0, -1]))
console.log(maxSubArray([-3, -1, -1]))