const sum = (nums, target) => {
  const hashtable = {}
  let difference

  for (let i = 0; i < nums.length; i++) {
    difference = target - nums[i]

    if (hashtable[difference]) {
      return [hashtable[difference], i]
    } else {
      hashtable[nums[i]] = i
    }
    // if (hashtable[nums[i]]) {
    //   return [hashtable[nums[i]], i]
    // } else {
    //   hashtable[difference] = i
    // }
  }

  return -1
}

console.log(sum([1, 2, 4, 3, 6], 5))
console.log(sum([1, 2, 3, 4, 1, 9, 5, 10], 12))
