const maxSlidingWindow = (nums, k) => {
  let output = [], q = [], l = 0, r = 0

  while (r < nums.length) {
    while (q && nums[q.at(-1)] < nums[r])
      q.pop()

    q.push(r)

    if (l > q[0])
      q.shift()

    if ((r + 1) >= k) {
      output.push(nums[q[0]])
      l++
    }

    r++
  }

  return output
}

console.log(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3))
console.log(maxSlidingWindow([1, 2, 3, 4], 2))
console.log(maxSlidingWindow([8, 7, 6, 9], 2))