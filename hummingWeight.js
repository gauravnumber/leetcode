var hummingWeight = (n) => {
  let res = 0
  while (n) {
    n = n & (n - 1)
    res++
  }

  return res
}

console.log(hummingWeight(00001010111))