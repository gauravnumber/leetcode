const combinationSum = (candidates, target) => {
  let res = [];

  const dfs = (i, cur, total) => {
    if (total === target) {
      res.push(cur.slice());
      return;
    }

    if (i >= candidates.length || total > target) return;

    cur.push(candidates[i]);
    dfs(i, cur, total + candidates[i]);

    cur.pop();
    dfs(i + 1, cur, total);
  };

  dfs(0, [], 0);

  return res;
};

console.log(combinationSum([2, 3, 6, 7], 7)); // => [ [ 2, 2, 3 ], [ 7 ] ]
