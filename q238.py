class Solution(object):
    def productExceptSelf(self, nums):
        """
        :type nums: List[int]
        :rtype: List[int]
        """
        res = nums[:]
        postfix = 1
        
        for i in range(1, len(res)):
            res[i] *= res[i -1]
            
        for i in range(len(res) - 1, 0, -1):
            res[i] = postfix
            res[i] *= res[i - 1]
            postfix *= nums[i]

        res[0] = postfix
        return res

Input: nums = [1,2,3,4]
Output: [24,12,8,6]

Input: nums = [-1,1,0,-3,3]
Output: [0,0,9,0,0]
