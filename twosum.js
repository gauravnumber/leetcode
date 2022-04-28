function twosum(nums, target) {
  let hashtable = {}, currentElement,
    difference

  for (let i = 0; i < nums.length; i++) {
    currentElement = nums[i]
    difference = target - currentElement;

    if (hashtable[currentElement]) {
      return [hashtable[currentElement], i];
    } else {
      hashtable[difference] = i;
    }
  }

  return -1
}

// console.log(twosum([1, 2, 3, 7, 5], 12))
console.log(twosum([1, 2, 3, 4, 5], 6))