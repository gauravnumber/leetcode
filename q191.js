function hummingWeight(n) {
  let res = 0

  while (n) {
    n &= n - 1
    res++
  }

  return res
}

// function hummingWeight(n) {
//   let res = 0

//   while (n) {
//     res += n % 2
//     n = n >> 1
//   }

//   return res
// }

console.log(hummingWeight(00000000000000000000000010000000))  // => 1
console.log(hummingWeight(00000000000000000000000000001011))  // => 3
console.log(hummingWeight(11111111111111111111111111111101))  // => 31

// Runtime: 82 ms, faster than 58.59% of JavaScript online submissions for Number of 1 Bits.
// Memory Usage: 42.2 MB, less than 86.32% of JavaScript online submissions for Number of 1 Bits.