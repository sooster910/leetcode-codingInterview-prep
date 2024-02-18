import heapq
class Solution:
    def kClosest(self, points: List[List[int]], k: int) -> List[List[int]]:
        sqrt_list=[]
        answer=[]
        for i,p in enumerate(points):
            #calculate Euclidean distance
            x,y = p
            sqrt=((x**2)+ (y**2))
            heapq.heappush(sqrt_list, [sqrt, i ])
        while(k>0):
            coor,idx=heapq.heappop(sqrt_list)
            answer.append(points[idx])
            k-=1
        return answer