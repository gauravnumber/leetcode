const reverseBit = n => {
  let res = 0

  for (let i = 0; i < 32; i++) {
    let bit = (n >> i) & 1
    res = res | (bit << (31 - i))
  }

  return res
}

console.log(reverseBit(00000000000000001000000000110100))