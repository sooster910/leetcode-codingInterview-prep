class Solution:
    def merge(self, intervals: List[List[int]]) -> List[List[int]]:
        intervals.sort()
        answer =[]
        min_val=None
        max_val=None

        for interval in intervals:
            if(min_val is None):
                min_val=interval[0]
                max_val= interval[1]
                continue
            
            if(interval[0]<=max_val):
                min_val = min(min_val, interval[0])
                max_val = max(max_val, interval[1])
                continue
            if(interval[0]>max_val) :
                # no overlapping
                answer.append([min_val, max_val])
                min_val = interval[0]
                max_val = interval[1]
                continue
        
        answer.append([min_val, max_val])
      
        return answer