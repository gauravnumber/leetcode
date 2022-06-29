// Not working
function subsetsWithDup(S) {
  S.sort((a, b) => a - b);
  totalset = [[]];

  for (let i = 0; i < S.length;) {
    let count = 0;

    while (count + i < S.length && S[count + i] == S[i]) count++;
    let previousN = totalset.length;

    for (let k = 0; k < previousN; k++) {
      let instance = totalset[k];

      for (let j = 0; j < count; j++) {
        instance.push(S[i]);
        totalset.push(instance);
      }
    }

    i += count;
  }

  return totalset;
}

console.log(subsetsWithDup([1, 2, 2])); // => [[],[1],[1,2],[1,2,2],[2],[2,2]]
