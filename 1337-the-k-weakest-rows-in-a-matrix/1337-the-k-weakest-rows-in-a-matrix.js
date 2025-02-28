/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
var kWeakestRows = function(mat, k) {
    
   const list = mat.map((row, idx)=> [row.filter(num=> num === 1).length, idx]).sort((a,b)=> a[0] - b[0]).map(item=> item[1])

   return list.slice(0, k)

};