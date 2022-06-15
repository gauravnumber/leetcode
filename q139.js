function wordBreak(s, wordDict) {
  let dp = Array(s.length + 1).fill(false);
  dp[s.length] = true;

  for (let i = s.length - 1; i > -1; i--) {
    for (let wi = 0; wi < wordDict.length; wi++) {
      let w = wordDict[wi];

      if (i + w.length <= s.length && s.substring(i, i + w.length) == w) {
        dp[i] = dp[i + w.length];
      }

      if (dp[i]) break;
    }
  }

  return dp[0];
}

console.log(wordBreak("leetcode", ["leet", "code"]));
console.log(wordBreak("leetcode", ["neet", "code"]));
