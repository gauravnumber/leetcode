const climbStairs = n => {
  let one, two
  one = two = 1

  for (let i = 0; i < n - 1; i++) {
    [one, two] = [one + two, one]
  }

  return one
}

console.log(climbStairs(2))
console.log(climbStairs(5))

// Runtime: 85 ms, faster than 33.45% of JavaScript online submissions for Climbing Stairs.
// Memory Usage: 42.1 MB, less than 38.93% of JavaScript online submissions for Climbing Stairs.