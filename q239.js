/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
  let output = [];
  let q = [];
  let l, r;
  l = r = 0;

  while (r < nums.length) {
    while (q && nums[q.at(-1)] < nums[r]) {
      q.pop();
    }

    q.push(r);

    if (l > q[0]) q.shift();

    if (r + 1 >= k) {
      output.push(nums[q[0]]);
      l++;
    }

    r++;
  }

  return output;
};
