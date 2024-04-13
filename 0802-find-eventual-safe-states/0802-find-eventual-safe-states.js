/**
 * @param {number[][]} graph
 * @return {number[]}
 */
var eventualSafeNodes = function(graph) {
    let result = []
    let incomingGraph = Array.from({length: 100001},()=>[])

    let terminalNode =[]
    for ( const idx in graph){
        for( const edge of graph[idx]){
            incomingGraph[edge].push(idx)
        }
    }
    for(const idx in graph){
        if(!graph[idx].length) terminalNode.push(idx)
    }
    for (let idx of terminalNode){
        for (let id of incomingGraph[idx] ){
            if(graph[id].length ===1){
                result.push(id)
            }
        }
    }
    return [...terminalNode, ...result].sort((a,b)=> a-b)
};