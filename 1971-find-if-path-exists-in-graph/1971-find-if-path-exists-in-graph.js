/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
var validPath = function(n, edges, source, destination) {
    const adjList = Array.from({length: n+1},()=>[])
    for ( const [start, end] of edges){
        adjList[start].push(end) 
        adjList[end].push(start)
    }
    let visited = Array(n+1).fill(0)
 
    function dfs(current,visited){
        if(current === destination){
            return true
        }
        visited[current] =1
        for( const next of adjList[current]){
            
            if(visited[next]) continue
            if(dfs(next, visited)) return true
        }

        return false    
    }
    
    return  dfs(source,visited)
};