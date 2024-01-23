class Solution:
  
    def isBipartite(self, graph: List[List[int]]) -> bool:
        self.is_Bipartite=True
        check= [0]*len(graph)
        visited=[False]*len(graph)
        
        for node in range(len(graph)):
            if visited[node]: continue
            self.dfs(node, visited, check,graph)
            
            if not self.is_Bipartite:
                print(node, self.is_Bipartite )
                return self.is_Bipartite
     
        return self.is_Bipartite
    
    def dfs(self, node, visited, check,graph):
        
        visited[node] = True
       
        #인접노드 
        for next in graph[node]:
            
            if not visited[next]:
                check[next]= (check[node]+1) %2   #0=>1 , 1=>0, 2=>1  
                self.dfs(next,visited, check, graph)
            else :
                
                if check[node] == check[next]:
                    self.is_Bipartite=False
                    return
                    
                


    