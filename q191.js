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

console.log(hummingWeight(0000000001011))
console.log(hummingWeight(000000000010100001011))