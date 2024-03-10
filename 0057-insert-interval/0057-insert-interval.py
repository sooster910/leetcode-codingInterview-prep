class Solution:
    def insert(self, intervals: List[List[int]], newInterval: List[int]) -> List[List[int]]:
        answer=[]
        min_val = newInterval[0]
        max_val = newInterval[1]
        answer = []
        for interval in intervals:
            if(interval[1]< min_val):
                answer.append([interval[0],interval[1]])
              
            elif(interval[0]>max_val ):
                answer.append([min_val, max_val])
                min_val = interval[0]
                max_val= interval[1]
            else:
                #overlapping
                min_val = min(interval[0], min_val)
                max_val = max(interval[1], max_val)
            
              
        answer.append([min_val, max_val])
        
        return answer


        