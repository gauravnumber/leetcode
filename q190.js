const reverseBits = n => {
  let res = 0, bit

  n = Math.floor(n)
  // console.log(`n`, n)
  console.log(`(n >>) & 1`, (n >> 0) & 1)
  console.log(`n >> 0`, n >> 0)
  console.log(`n >> 1`, n >> 1)
  console.log(`n << 1`, n << 1)


  return

  for (let i = 0; i < 32; i++) {
    bit = (n >> i) & 1

    // console.log(`bit`, bit)


    res = res | (bit << (31 - i))

    // console.log(`res`, res)
  }

  return res
}

// console.log(reverseBits(00000010100101000001111010011100))  // =>    964176192 (00111001011110000010100101000000)

console.log(reverseBits(11111111111111111111111111111101)) // =>   3221225471 (10111111111111111111111111111111)
