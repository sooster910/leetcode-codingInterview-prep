/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function(mat, r, c) {
    const flatList = mat.flat()
    if(r*c !== flatList.length) return mat
    const newMat = Array.from({length:r},()=> Array(c).fill(0))
    flatList.forEach((num, idx)=> newMat[Math.floor(Number(idx)/c)][Number(idx)%c] = num)
    return newMat
};