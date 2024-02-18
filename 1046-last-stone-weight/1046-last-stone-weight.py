import heapq
class Solution:
    def lastStoneWeight(self, stones: List[int]) -> int:
        #heapify(max heap)
        h = []
        for stone in stones:
            heapq.heappush(h,-stone)
        
        while(len(h)>1):
            #choose heaviest two stones (weight ->x, y x<=y)
            x=heapq.heappop(h)
            y=heapq.heappop(h)
            # check if both stones are equal
            
            # if true, then destoryed
            if(x!=y):
                heapq.heappush(h,-abs(x-y))
            # otherwise add new stone (abs diff)
        if(len(h)>=1):
            return abs(h[0])
        else:
            return 0