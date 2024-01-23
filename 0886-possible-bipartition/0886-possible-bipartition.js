/**
 * @param {number} n
 * @param {number[][]} dislikes
 * @return {boolean}
 */
var possibleBipartition = function(n, dislikes) {
    let check = Array.from({length: n+1},()=> 0)
    let visited= Array.from({length: n+1},()=> 0)
    //adjlist
    let adjList = {}
    Array.from({length: n+1}).map((v,i) =>adjList[i]= [])
    
    for (let [from, to] of dislikes){
        adjList[from].push(to)
        adjList[to].push(from)
    }
    let isBipartite= true
    for(let i =0; i <n;i++){
        if(visited[i]) continue
        let result =dfs(i,isBipartite)
        if(!result) return false

    }
    return true
    function dfs(i,isBipartite){
        visited[i] = 1
        for(const next of adjList[i]){
            if(!visited[next]){
                check[next]= (check[i]+1)%2
               isBipartite =dfs(next,isBipartite)
            }else{
                
                if (check[i] === check[next]) {
                    // isBipartite= false
                    console.log(i, next, check, isBipartite)
                    return false
                }
            }
        }
        return isBipartite
    }
};