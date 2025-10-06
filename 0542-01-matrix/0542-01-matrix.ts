/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var updateMatrix = function(mat) {
    let m = mat.length, n = mat[0].length;
    let newMat = Array.from({length: m}, () => Array(n).fill(Infinity));
    const q = []
    // console.log(newMat)
  // 모든 0 찾아서 q에 넣기
  // 해당 0 찾을때 newMat에 가장 가까운 거리인 0 업데이트 해놓기

  // 큐 순회
  // 큐에서 하나꺼내기
  // 이미 큐에 있으면 skip,
  for(let i = 0; i<m; i++){
      for(let j = 0; j<n; j++){
          //모든 0 찾고, newmat업데이트
         if(mat[i][j] !== 0 ) continue
        newMat[i][j] = 0
        q.push([i,j,newMat[i][j]])

      }
  }

  while(q.length){
    const [y, x, dist] = q.shift()

    // 상하좌우 탐색 하기
    const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];
    for (const [dy, dx] of directions) {
      const newX = x + dx;
      const newY = y + dy;

      if (newX >= 0 && newX < n && newY >= 0 && newY < m && dist<newMat[newY][newX]  ) {
        // area안에 있으면 queue에 넣기 ( 거리 1 증가 )
        q.push([newY, newX, dist + 1])
        newMat[newY][newX] = dist+1
      }

    }

  }
  return newMat
};