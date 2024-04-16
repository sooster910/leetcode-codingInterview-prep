/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var findSmallestSetOfVertices = function(n, edges) {
    // incoming이 없다. 
    const adjList = Array.from({length: n+1},()=>[])
    const incomings = Array(n).fill(0)
    for (const [from, to ] of edges){
        adjList[from].push(to) 
        incomings[to]+=1
    }

    return incomings.map((v,i)=> !v ? i: -1).filter((v)=> v!==-1)
};