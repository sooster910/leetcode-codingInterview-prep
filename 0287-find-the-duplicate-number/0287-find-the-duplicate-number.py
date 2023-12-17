from collections import defaultdict
class Solution:
    def findDuplicate(self, nums: List[int]) -> int:
        #hashTable
        hash=defaultdict(int)
        for num in nums:
            hash[num]+=1
            if hash[num] >1:
                return num
     