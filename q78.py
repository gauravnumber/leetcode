from typing import List
# Approach 1: Cascading
# Time Complexity: O(N * 2^N)
# Space Complexity: O(N * 2^N)
class Solution:
    def subsets(self, nums: List[int]) -> List[List[int]]:
        output = [[]]
        
        for num in nums:
            output += [curr + [num] for curr in output]
        
        return output


s = Solution()
print(s.subsets([1, 2, 3])) # [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]]
