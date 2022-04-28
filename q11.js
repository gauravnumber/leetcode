function maxArea(height) {
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
}

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]))