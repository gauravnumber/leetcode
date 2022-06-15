const helper = (nums) => {
  let rob1, rob2, n, newRob;
  rob1 = rob2 = 0;

  for (let i = 0; i < nums.length; i++) {
    n = nums[i];

    newRob = Math.max(rob1 + n, rob2);
    rob1 = rob2;
    rob2 = newRob;
  }

  return rob2;
};

const rob = (nums) => {
  return Math.max(helper(nums.slice(1)), helper(nums.slice(-1)));
};

console.log(rob([2, 3, 2]));
