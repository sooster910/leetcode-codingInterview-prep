# s  many partition as many as possible 
# each letter appear in at most one part (무조건 하나의 파트에서 한개 이상 있어야함)
# partition done when? 

# return 파이션 사이즈 구하기 
from collections import defaultdict 


class Solution:
    def partitionLabels(self, s: str) -> List[int]:

        #cnt =0
        # mapping 해준다. 
        # end_index 
        # 만약 end_index i 랑 같으면, result.append(i), cnt=0 
        # 같지 않다면, 
        # 현재 char의 max가 end_index 보다 작거나 같다면, 다음으로 넘감
        # 현재 char의 max가 end_index 보다 크면, 
        # end_index 를 update 한다. 

        cnt = 0
        mapper = defaultdict(list)
        end_index = 0
        result = []
        for i,char in enumerate(s): 
            mapper[char].append(i)
    
        for i, char in enumerate(s):
            end_index = max(end_index, mapper[char][-1])
            cnt+=1
            if end_index == i :
               result.append(cnt)
               cnt = 0
               continue
            

        return result



