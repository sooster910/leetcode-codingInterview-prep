class Solution:
    def maxSubArray(self, nums: List[int]) -> int:

      # -2 1  -3  4  -1  2 1  -5  4  
      #     1  -2  4  3   5 6   1

        dp = [ 0 for _ in range(len(nums))]
        
        for i, num in enumerate(nums):
            if(i == 0 ): 
                dp[i]= num
                continue
            if(dp[i-1]+num < num):
                dp[i]=num
            else:
                dp[i] = dp[i-1] + num
    

        return max(dp)
      #dp[cur_index-1]+ nums[cur_index] < nums[cur_index]
      #현재 인덱스가 더 크면, 처음부터 다시 
      #cnt = 0
      #start_index = cur_index
      #max값 찾기 
      