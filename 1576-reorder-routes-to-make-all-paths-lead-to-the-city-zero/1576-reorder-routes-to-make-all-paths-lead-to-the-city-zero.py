class Solution:
    def minReorder(self, n: int, connections: List[List[int]]) -> int:
        edges = {(a,b) for a,b in connections}
        adjList = {city:[] for city in range(n)} 

        visit = set()
        answer = 0

        for a,b in connections:
            adjList[a].append(b)
            adjList[b].append(a)
        visit.add(0)
        

        def dfs(city):
            nonlocal edges, adjList, visit, answer

            for neighbor in adjList[city]:
                if neighbor in visit: 
                    continue
                if (neighbor, city) not in edges:
                    answer+=1
                visit.add(neighbor)
                dfs(neighbor)
            
        

        dfs(0)
        return answer


        