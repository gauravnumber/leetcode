const canJump = (nums) => {
  let goal = nums.length - 1;

  for (let i = nums.length - 1; i > -1; i--) {
    if (i + nums[i] >= goal) {
      goal = i;
    }
  }

  return goal === 0;
};

console.log(canJump([2, 3, 1, 1, 4]));
