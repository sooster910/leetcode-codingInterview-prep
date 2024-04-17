/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function(graph) {
    // 0 to n-1 
    // find all possible paths from node 0 

    let result = []
    let visited = new Set()

    

    dfs(0,[0])
    


    function dfs(current, path ){
        console.log(current, path)
        if(current === graph.length-1 ){
            console.log("path",path)
            // result = [...result, path]
            result.push([...path])
            return
        }

        visited.add(current)

        for(const next of graph[current]){
            if(visited.has(next)) continue
            path.push(next)
            dfs(next, path)
            path.pop()
            visited.delete(current)
        }
        
    }
    return result
};