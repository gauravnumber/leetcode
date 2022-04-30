var twosum = function (nums, target) {
  var hashtable = {}, difference

  for (let i = 0; i < nums.length; i++) {
    difference = target - nums[i]

    if (hashtable[nums[i]]) {
      return [hashtable[nums[i]], i]
    } else {
      hashtable[difference] = i
    }
  }

  return - 1
}

console.log(twosum([1, 2, 3, 4, 1, 9, 5, 10], 12))