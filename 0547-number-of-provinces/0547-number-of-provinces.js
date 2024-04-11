/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function(isConnected) {
    //n cities, connected - bidirection
    let answer = 0
    let adjList = Array.from({length:isConnected.length+1 },()=>[])

    for(let i=0; i<isConnected.length; i++ ){
        for(let j = 0; j<isConnected[i].length; j++){
            if(!isConnected[i][j]) continue
            if(i ===j) continue
            adjList[i+1].push(j+1)
        }
    }
    console.log(adjList)
    visited= new Set()
    function dfs(currentCity){

        visited.add(currentCity)
        if(!adjList[currentCity]?.length ) return 1
        // console.log(adjList, currentCity ) 
        for (const nextCity of adjList[currentCity]){
            // console.log(nextCity)
            if(visited.has(nextCity)) continue
            dfs(nextCity)
        }
        return 1
    }

    
    for(let i = 1; i<=adjList.length; i++){
        if(visited.has(i)) continue
        answer+=dfs(i)
      
    }
    return answer-1
};