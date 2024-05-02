from collections import deque 
class Solution:
    def updateMatrix(self, mat: List[List[int]]) -> List[List[int]]:
        rows, cols = len(mat), len(mat[0])
        q = deque()
        distances = [[float('inf')] * cols for _ in range(rows)]

        directions = [(-1, 0), (0, 1), (1, 0), (0, -1)]

        for i in range(rows):
            for j in range(cols):
                if mat[i][j] == 0:
                    q.append((i, j))
                    distances[i][j] = 0

        while q:
            x, y = q.popleft()
            for dx, dy in directions:
                nx, ny = x + dx, y + dy
                if 0 <= nx < rows and 0 <= ny < cols and distances[nx][ny] == float('inf'):
                    distances[nx][ny] = distances[x][y] + 1
                    q.append((nx, ny))

        return distances
