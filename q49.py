from typing import List
from collections import defaultdict

class Solution:
  def groupAnagrams(self, str: List[str]) -> List[List[str]]:
    res = defaultdict(list)

    for s in str:
      count = [0] * 26

      for c in s:
        count[ord(c) - ord("a")] += 1

      res[tuple(count)].append(s)

    return res.values()

s = Solution()
print(s.groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]))