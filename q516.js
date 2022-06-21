/**
 * @param {string} s
 * @return {number}
 */
// Runtime: 337 ms
// var longestPalindromeSubseq = function(s) {
//     const dp = new Array(s.length).fill().map(v => new Array(s.length).fill(0))

//     for (let i = s.length - 1; i >= 0; i--) {
//         dp[i][i] = 1;
//         for (let j = i + 1; j < s.length; j++) {
//             if (s[i] === s[j])
//                 dp[i][j] = dp[i + 1][j - 1] + 2
//             else
//                 dp[i][j] = Math.max(dp[i][j - 1], dp[i + 1][j])
//         }
//     }

//     return dp[0][s.length - 1]
// };

// Runtime: 141 ms
var longestPalindromeSubseq = function (s) {
  const n = s.length;
  const dp = new Array(n).fill(0);

  for (let i = n - 1; i >= 0; i--) {
    dp[i] = 1;
    let prev = 0;
    for (let j = i + 1; j < n; j++) {
      let tmp = dp[j];
      if (s[i] === s[j]) {
        dp[j] = prev + 2;
      } else {
        dp[j] = Math.max(dp[j], dp[j - 1]);
      }
      prev = tmp;
    }
  }
  return dp[n - 1];
};

console.log(longestPalindromeSubseq("bbbab")); // => 4
console.log(longestPalindromeSubseq("cbbd")); // => 2
