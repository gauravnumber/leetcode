class Solution {
  public int search(int[] nums, int target) {
    int pivot, left = 0, right = nums.length - 1;
    while (left <= right) {
      pivot = left + (right - left) / 2;
      if (nums[pivot] == target) return pivot;
      if (target < nums[pivot]) right = pivot - 1;
      else left = pivot + 1;
    }
    return -1;
  }

  public static void main(String[] args) {
    int[] nums = {-1,0,3,5,9,12};

    Solution s = new Solution();
    System.out.println(s.search(nums, 9)); // => 4
  }
}