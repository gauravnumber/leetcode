# Approach 3: Lexicographic (Binary Sorted) Subsets
# Time Complexity: O(N * 2^N)
# Space Complexity: O(N * 2^N)

from typing import List
class Solution:
    def subsets(self, nums: List[int]) -> List[List[int]]:
        n = len(nums)
        output = []
        
        for i in range(2**n, 2**(n + 1)):
            # generate bitmask, from 0..00 to 1..11
            bitmask = bin(i)[3:]
            
            # append subset corresponding to that bitmask
            output.append([nums[j] for j in range(n) if bitmask[j] == '1'])
        
        return output

s = Solution()
print(s.subsets([1, 2, 3])) # [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]]
