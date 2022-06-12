from typing import List
from collections import deque

class Solution:
  def maxSlidingWindow(self, nums: List[int], k: int) -> List[int]:
    output = []
    q = deque()
    l = r = 0

    while r < len(nums):
      while q and nums[q[-1]] < nums[r]:
        q.pop()
      q.append(r)

      if l > q[0]:
        q.popleft()

      if (r + 1) >= k:
        output.append(nums[q[0]])
        l += 1

      r += 1
    
    return output

s = Solution()
print(s.maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3))
