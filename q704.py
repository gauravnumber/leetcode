from typing import List
# Time complexity : O(log N)
# Space complexity : O(1)
class Solution:
    def search(self, nums: List[int], target: int) -> int:
        left, right = 0, len(nums) - 1
        
        if nums[0] > target or nums[-1] < target:
            return -1

        while left <= right:
            pivot = left + (right - left) // 2
            if nums[pivot] == target:
                return pivot
            if target < nums[pivot]:
                right = pivot - 1
            else:
                left = pivot + 1
        return -1


s = Solution()
print(s.search([5], 5)) # 0
print(s.search([-1,0,3,5,9,12], 9)) # 4
print(s.search([-1,0,3,5,9,12], 2)) # -1