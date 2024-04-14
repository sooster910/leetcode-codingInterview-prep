class Solution:
    def numIslands(self, grid: List[List[str]]) -> int:
        dx =[0,1,0,-1]
        dy=[1,0,-1,0]
        cnt = 0
        visited = [[0 for i in range(len(grid[0]))] for j in range(len(grid))]
        def dfs(y,x):
            visited[y][x] = 1
            for i in range(4):
                ny= dy[i] + y
                nx= dx[i] +x
                #check boundary
                if (0 <= ny < len(grid) and 0 <= nx < len(grid[0]) and visited[ny][nx] == 0 and grid[ny][nx] == "1"):
                    dfs(ny,nx)
            return 1
        for i in range(len(grid)):
            for j in range(len(grid[0])):
                if(grid[i][j] == "1" and visited[i][j] == 0):
                    cnt+=dfs(i,j)
                    
        
        return cnt
         