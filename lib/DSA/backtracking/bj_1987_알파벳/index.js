const inputs = require("fs").readFileSync("./input.txt").toString().split("\n")
const [r,c] = inputs[0].split(" ").map(Number)
const board = inputs.slice(1).map(v=> v.split(""))
console.time("aa")
const visited = new Set()
const dy =[1, 0, -1, 0] //북 동 남 서
const dx = [0, 1, 0, -1]
let result = 1
visited.add(board[0][0])
dfs(0,0,1)
console.log(result)
console.timeEnd("aa")
function dfs(x, y, cnt){
  result = Math.max(cnt, result)

  // x, y 를 네가지 방법에서 생각
  let nx, ny
  for (const direction in dx){
    nx = dx[direction] + x
    ny = dy[direction]+ y

    // board 경계확인
    if( 0<=nx && nx< c && ny>=0 && ny<r ){
      if(!visited.has(board[ny][nx])){
        visited.add(board[ny][nx])
        dfs(nx , ny, cnt+1, )
        visited.delete(board[ny][nx])
      }
    }
  }
}