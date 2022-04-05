function q121(prices: number[]): number {
  let diff: number[] = [],
    min: number = Math.min(...prices),
    pos: number = prices.indexOf(min);

  for (let i = pos + 1, il = prices.length; i < il; i++) {
    diff.push(prices[i] - prices[pos]);
  }

  return diff.length ? Math.max(...diff) : 0;
}

console.log(q121([7, 1, 5, 3, 6, 4]));
console.log(q121([7, 6, 5, 4, 3, 2, 1]));
