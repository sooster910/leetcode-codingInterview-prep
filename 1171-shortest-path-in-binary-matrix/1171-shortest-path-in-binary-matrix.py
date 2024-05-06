from collections import deque
class Solution:
    def shortestPathBinaryMatrix(self, grid: List[List[int]]) -> int:
        visited = set()
        q = deque()
        #check 0,0
        if(grid[0][0]!= 0):
             return -1
        q.append([0,0,1])

        while(q):
            #꺼내기
            y,x,distance = q.popleft()
            
            if(y == len(grid)-1 and x == len(grid[0])-1 ):
                return distance
            #check 8direction
            #북동남서 
            dx = [-1,0,1,-1,1,-1,0,1]
            dy = [-1,-1,-1,0,0,1,1,1]
            
            for i in range(len(dx)):
                nx= dx[i]+ x
                ny= dy[i] +y
                #범위에 포함되는지 
                if 0 <= nx < len(grid[0]) and 0 <= ny < len(grid) and (ny, nx) not in visited and grid[ny][nx] == 0:
                    visited.add((ny,nx))
                    q.append([ny,nx,distance+1])
        #모든 곳을 방문해도 없음 
        return -1


        