/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var modifiedMatrix = function(matrix) {
    const n = matrix.length
    const m = matrix[0].length
    const columnMatrix = matrix[0].map((_, columnIndex)=> matrix.map(row=> row[columnIndex]))
    
    
    for(let i=0; i<n; i++ ){
        for(let j=0; j<m; j++){
            if(matrix[i][j] === -1){
                matrix[i][j]= Math.max(...(columnMatrix[j]))
            }             
        }
    }
    console.log(matrix)
    return matrix

};