// Not working
function subsetsWithDup(S) {
  let size, startIndex;

  // S.sort((a, b) => a - b);
  let ret = [[]];

  size = startIndex = 0;

  for (let i = 0; i < S.length; i++) {
    startIndex = i >= 1 && S[i] == S[i - 1] ? size : 0;
    size = ret.length;
    for (let j = startIndex; j < size; j++) {
      let temp = ret[j];
      temp.push(S[i]);
      ret.push(temp);
    }
  }
  return ret;
}

console.log(subsetsWithDup([1, 2, 2])); // => [[],[1],[1,2],[1,2,2],[2],[2,2]]

// I/P [1, 2, 2]
// O/P [[],[1],[1,2],[1,2,2],[2],[2,2]]
