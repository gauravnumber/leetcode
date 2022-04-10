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

interface diffType {
  [price: string]: number[];
}

function maxProfit(prices: number[]): number {
  let diff: diffType = {},
    value,
    max = -Infinity;

  for (let i = 0, il = prices.length; i < il; i++) {
    let price = prices[i];
    diff[i] = [];

    for (let j = i + 1; j < il; j++) {
      diff[i].push(prices[j] - price);
    }
  }

  for (const price in diff) {
    if (Object.prototype.hasOwnProperty.call(diff, price)) {
      const element = diff[price];

      value = Math.max(...element);

      if (max < value) {
        max = value;
      }
    }
  }

  return max < 0 ? 0 : max;
}

console.log(maxProfit([7, 1, 5, 3, 6, 4])); // => 5
console.log(maxProfit([7, 6, 5, 4, 3, 2, 1])); // => 0
console.log(maxProfit([2, 4, 1])); // => 2
console.log(maxProfit([1, 4, 1, 4, 3, 1])); // => 3