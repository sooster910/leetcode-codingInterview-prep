const inputs = require("fs").readFileSync("./input.txt").toString().split("\n")

for (const line of inputs ){
  if(line[0] == 0) break

  const [k, ] =line.split(" ")[0]
  const s = line.split(" ").slice(1).map(Number)
  format(solution(k,s))
  console.log("")

}
function format(arr){
  for( const a of arr){
    console.log(a.join(" "))
  }
}
function solution(k, s){
  const result = []
  dfs(0,[], s)

  function dfs(start, selected, s){
    if(selected.length === 6){
      result.push([...selected])
      return
    }

    for(let i = start; i<s.length; i++){
      selected.push(s[i])
      dfs(i+1, selected, s)
      selected.pop()
    }
  }

  return result
}