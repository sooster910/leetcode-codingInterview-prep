function matrixReshape(mat: number[][], r: number, c: number): number[][] {
    const list = mat.flat()
    if(r*c !== list.length) return mat
    const newMat = Array.from({length:r},()=> Array(c).fill(0))
    
    list.forEach((num, idx)=>{
        const row = Math.floor(Number(idx)/c)
        const col = Number(idx)%c

        newMat[row][col] = num
    })
    return newMat
};