/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let l = 0, r = height.length - 1, res = 0, area

  while (l < r) {
    area = (r - l) * Math.min(height[l], height[r])
    res = Math.max(area, res)

    if (height[l] < height[r]) {
      l++
    } else {
      r--
    }
  }

  return res
};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]))
// Runtime: 87 ms, faster than 72.57% of JavaScript online submissions for Container With Most Water.
// Memory Usage: 49.3 MB, less than 84.52% of JavaScript online submissions for Container With Most Water.
// Next challenges:
// Trapping Rain Water