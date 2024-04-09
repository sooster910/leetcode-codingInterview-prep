/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function(n, trust) {

    // town judge trusts nobody
    // everybody trusts the town judge
    // one person satisfies properties 1 and 2

    //find a person w no outgoing 
    //모든 사람이 town judge 를 알아야 한다. 
    const incomingEdges = Array.from({length: n+1}).fill(0)
    const adjList = Array.from({length: n+1},()=>[])
    for( const [from, to] of trust){
        adjList[from].push(to)
        incomingEdges[to]+=1
    }
    console.log("incomingEdges",incomingEdges)
    const townJudges = []
    for( const index in adjList){
        if(!adjList[index].length && Number(index)!==0) townJudges.push(index)
    }
    
    for(const townJudge of townJudges){
        if(incomingEdges[townJudge] === n-1) return townJudge   
    }    
    return -1
    // return adjList.findIndex((v,i)=> !v.length && (i!==0))

};