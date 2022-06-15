const rob = (nums) => {
  let rob1, rob2, n;
  rob1 = rob2 = 0;

  for (let i = 0; i < nums.length; i++) {
    n = nums[i];
    let temp = Math.max(n + rob1, rob2);
    rob1 = rob2;
    rob2 = temp;
  }

  return rob2;
};

console.log(rob([1, 2, 3, 1]));
