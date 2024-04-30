class Solution:
    def canReach(self, arr: List[int], start: int) -> bool:
        self.N = len(arr)
        self.arr = arr
        self.visited = set()
        return self.dfs(start)
        

    def dfs(self,i):
        if i < 0 or i >= self.N or i in self.visited:
            return False
        if self.arr[i] == 0:
            return True
            
        self.visited.add(i)
        return self.dfs(i + self.arr[i]) or self.dfs(i - self.arr[i]) # if dfs(i+arr[i]) == false, then dfs(i-arr[i])
