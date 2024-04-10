/**
 * @param {number[][]} edges
 * @return {number}
 */
var findCenter = function(edges) {
    const counters= Array(edges.length+2).fill(0)
    for (const [from, to] of edges){
        counters[from] += 1
        counters[to] +=1
    }
    return counters.findIndex((v)=> v === edges.length)
};