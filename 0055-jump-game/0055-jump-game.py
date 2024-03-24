class Solution(object):
    def canJump(self, nums):
        """
        :type nums: List[int]
        :rtype: bool
        """
        dp = [None] * len(nums)
        def recursion(index):
            if(len(nums)<=index  ):
                return False
            if(dp[index] is not None):
                return dp[index]
            if(len(nums)-1 == index):
                return True
      
           
            for j in range( nums[index], 0 ,-1):
                if(recursion(j+index)):
                    dp[index]=True
                    return True
            dp[index]=False
            return dp[index]   
        return recursion(0)
    