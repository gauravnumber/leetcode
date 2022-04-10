// function maxProfit(prices: number[]): number {
//   let diff: number[] = [],
//     min: number = Math.min(...prices),
//     pos: number = prices.indexOf(min);

//   while (prices.at(-1) === min) {
//     prices = prices.slice(0, pos);

//     min = Math.min(...prices);
//     pos = prices.indexOf(min);
//   }

//   for (let i = pos + 1, il = prices.length; i < il; i++) {
//     diff.push(prices[i] - prices[pos]);
//   }

//   return diff.length ? Math.max(...diff) : 0;
// }

// function maxProfit(prices) {
//   let diff = {}, value, max = -Infinity

//   for (let i = 0, il = prices.length; i < il; i++) {
//     let price = prices[i];
//     diff[price] = [];

//     for (let j = i + 1; j < il; j++) {
//       diff[price].push(prices[j] - price);
//     }
//   }

//   for (const price in diff) {
//     if (Object.prototype.hasOwnProperty.call(diff, price)) {
//       const element = diff[price];

//       value = Math.max(...element)

//       if (max < value) {
//         max = value;
//       }
//     }
//   }

//   return max < 0 ? 0 : max;
// }

//? Time limit exceed 
// Brute Force
// function maxProfit(prices) {
//   let globalProfit = 0

//   for (let i = 0; i < prices.length; i++) {
//     for (let j = i + 1; j < prices.length; j++) {
//       const currentProfit = prices[j] - prices[i]

//       if (currentProfit > globalProfit)
//         globalProfit = currentProfit
//     }
//   }

//   return globalProfit
// }

function maxProfit(prices) {
  let l = 0, r = 1, maxP = 0, profit

  while (r < prices.length) {
    if (prices[l] < prices[r]) {
      profit = prices[r] - prices[l]
      maxP = Math.max(maxP, profit)
    } else {
      l = r
    }

    r++
  }

  return maxP
}

console.log(maxProfit([7, 1, 5, 3, 6, 4])); // => 5
console.log(maxProfit([7, 6, 5, 4, 3, 2, 1])); // => 0
console.log(maxProfit([2, 4, 1])); // => 2
console.log(maxProfit([1, 4, 1, 4, 3, 1])); // => 3
