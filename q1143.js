function longestCommonSubsequence(text1, text2) {
  //  re, res
  //  [ [ 0, 0, 0, 0 ], [ 0, 0, 0, 0 ], [ 0, 0, 0, 0 ] ]

  let dp = Array(text1.length + 1).fill(Array(text2.length + 1).fill(0))

  for (let i = text1.length - 1; i > -1; i--) {
    for (let j = text2.length - 1; j > -1; j--) {
      if (text1[i] === text2[j]) {
        dp[i][j] = 1 + dp[i + 1][j + 1]
      } else {
        dp[i][j] = Math.max(dp[i][j + 1], dp[i + 1][j])
      }
    }
  }

  return dp[0][0]
}

console.log(longestCommonSubsequence("abcde", "ace"))