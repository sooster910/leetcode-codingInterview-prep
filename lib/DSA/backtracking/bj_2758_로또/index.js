const inputs = require("fs").readFileSync("./input.txt").toString().split("\n")

const tc = inputs.slice(1,)

for (const testCase of tc){
  const [n,m] = testCase.split(" ").map(Number)
  solution(n,m)
}


//메모리 초과
function solution(n,m){
  // 숫자 array  생성
  const arr = Array.from({length: m}, (_,i)=> i+1)
  const result = []
  dfs(0,0,[], arr)
  console.log(result.length)
  function dfs(depth, start, selected, arr) {
    if(depth === n){
       result.push([...selected])
      return
    }

    for(let i =start; i<arr.length; i++ ){
      // 현재 뽑을 숫자가 2배이상 커야하는데요.

      if(!selected.length||arr[i]/2 >= selected.at(-1) ){
        selected.push(arr[i])
        dfs(depth+1, start+1, selected, arr)
        selected.pop()
      }
    }
  }
}

