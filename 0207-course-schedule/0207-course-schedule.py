from collections import deque

class Solution:
    def canFinish(self, numCourses: int, prerequisites: List[List[int]]) -> bool:
        adjacency_list = [  [] for i in range(numCourses)]
        incoming_list = [0] * numCourses
   
        
        for a,b in prerequisites:
            adjacency_list[b].append(a) #initialize adjacency list
            incoming_list[a]+=1 # initialize incoming vertex
        
        # initialize q with no incoming vertex
        q = deque()
        for i,v in enumerate(incoming_list):
            if v==0:
                q.append(i)
        # q
        result = []
        while(q):
            v = q.popleft()
            result.append(q)
            #adj list
            for adj_v in adjacency_list[v]:
                if(incoming_list[adj_v]>0):
                   incoming_list[adj_v]-=1

                   if incoming_list[adj_v] ==0:
                    q.append(adj_v)
            
        
        return  len(result) == numCourses
        