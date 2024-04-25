/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, color) {
    n = image.length;
    m = image[0].length
    let prevColor = image[sr][sc]
    if(prevColor === color) return image
    
    dfs(sr, sc, prevColor, color)
    return image


    function dfs(i,j, prevColor, newColor){
        if(i<0 || i>=n || j<0||j>=m || image[i][j] !== prevColor  ) return

        image[i][j] = newColor // 컬러 업데이트 
        console.log(image)
        dfs( i-1, j,prevColor, newColor ) //북
        dfs( i, j+1,prevColor, newColor ) //동
        dfs( i+1, j, prevColor, newColor) //남
        dfs( i, j-1,prevColor, newColor ) //서
    }
};