const numDecodings = (s) => {
  let dp = {}
  dp[s.length] = 1

  for (let i = s.length - 1; i > -1; i--) {
    console.log(`dp`, dp)


    if (s[i] == "0") {
      dp[i] = 0
    } else {
      dp[i] = dp[i + 1]
    }

    if (i + 1 < s.length && (s[i] == "1" || s[i] == "2" && /[0123456]/.test(s + 1))) {
      dp[i] += dp[i + 2]
    }
  }

  return dp[0]
}

console.log(numDecodings("12")) // => 2