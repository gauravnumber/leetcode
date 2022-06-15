function search(nums, target) {
  let mid;
  let l = 0,
    r = nums.length - 1;

  while (l <= r) {
    mid = (l + r) / 2;

    if (target === nums[mid]) return mid;

    if (nums[l] <= nums[mid]) {
      if (target > nums[mid] || target < nums[l]) l = mid + 1;
      else r = mid - 1;
    } else {
      if (target < nums[mid] || target > nums[r]) r = mid - 1;
      else l = mid + 1;
    }
  }

  return -1;
}

console.log(search([4, 5, 6, 7, 0, 1, 2], 0)); //  =>  4
console.log(search([4, 5, 6, 7, 0, 1, 2], 3)); //  =>  -1
console.log(search([-1], 0)); //  =>  -1
