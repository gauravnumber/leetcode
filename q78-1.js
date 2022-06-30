function subsets(nums) {
  const output = [[]];

  for (let num of nums) {
    const n = output.length;
    for (let i = 0; i < n; i++) {
      let cur = output[i];
      output.push(cur.concat([num]));
    }
  }

  return output;
}

console.log(subsets([1, 2, 3])); // => [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]]
console.log(subsets([0])); // => [[],[0]]
