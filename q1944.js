/**
 * @param {number[]} heights
 * @return {number[]}
 */
var canSeePersonsCount = function (heights) {
  let res = new Array(heights.length).fill(0);
  let stack = [];

  for (let i = 0; i < heights.length; i++) {
    const current = heights[i];

    while (stack.length && heights[stack.at(-1)] <= current) res[stack.pop()]++;

    if (stack.length) res[stack.at(-1)]++;

    stack.push(i);
  }

  return res;
};
