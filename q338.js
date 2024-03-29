const countBits = (n) => {
  let mem = Array.from(Array(n + 1));
  mem[0] = 0;

  for (let i = 1; i <= n; i++) mem[i] = mem[Math.floor(i / 2)] + (i % 2);

  return mem;
};

// function countBits(n) {
//   let dp, offset = 1
//   dp = Array.from(Array(n + 1)).map(a => 0)

//   for (let i = 0; i < n + 1; i++) {
//     if (offset * 2 === i) {
//       offset = i
//     }

//     dp[i] = 1 + dp[i - offset]

//     // console.log(`dp[i]`, dp[i])
//     // console.log(`dp[i - offset]`, dp[i - offset])
//   }

//   return dp
// }

console.log(countBits(2)); // => [0,1,1]
console.log(countBits(5)); // => [0,1,1,2,1,2]
