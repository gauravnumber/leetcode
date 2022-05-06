var coinChange = function (coins, amount) {
  var dp = Array(amount + 1).fill(amount + 1), c
  dp[0] = 0

  for (let a = 1; a < amount + 1; a++) {
    for (let ci = 0; ci < coins.length; ci++) {
      c = coins[ci]

      if (a - c >= 0) {
        dp[a] = Math.min(dp[a], 1 + dp[a - c])
      }
    }
  }

  return dp[amount] !== amount + 1 ? dp[amount] : -1
}

console.log(coinChange([1, 2, 5], 11))  // => 3
console.log(coinChange([1, 3, 4, 5], 7))  // => 2