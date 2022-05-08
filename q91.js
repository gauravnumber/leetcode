const numDecodings = (s) => {
  let len = s.length
  let dp = {
    len: 1
  }

  // len.bind(dp)

  // console.log(`/[0123456]/.test(s)`, /[0123456]/.test(s))

  // console.log(`s[0]`, s[0])
  // console.log(`s[1]`, s[1])

  for (let i = s.length - 1; i > -1; i--) {
    console.log(`dp`, dp)


    if (s[i] == "0") {
      dp[i] = 0
    } else {
      dp[i] = dp[i + 1]
      // console.log(`dp`, dp)

    }

    // if (i + 1 < s.length && (s[i] == "1" || s[i] == "2" && s[i + 1] in "0123456")) {
    if (i + 1 < s.length && (s[i] == "1" || s[i] == "2" && /[0123456]/.test(s + 1))) {
      dp[i] += dp[i + 2]
    }
  }

  return dp[0]
}

console.log(numDecodings("12"))