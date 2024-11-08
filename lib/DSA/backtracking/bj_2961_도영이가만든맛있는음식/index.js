const assert = require("assert")
const inputs = require("fs").readFileSync("./input.txt").toString().split("\n")
const cousin = inputs.slice(1,).map((v)=>v.split(" ").map(Number))

const selected=[]

let minDiff = Infinity

dfs(0, cousin, selected)
console.log(minDiff)

function dfs(depth, cousin, selected){

  if(depth === cousin.length) {
    if(!selected.length) return
    const [sum_s, sum_b] =getSum(selected, cousin)
    const diff= Math.abs(sum_s-sum_b)
    minDiff = Math.min(minDiff, diff)
    return
  }
  selected.push(depth)
  dfs(depth+1, cousin, selected)
  selected.pop()
  dfs(depth+1, cousin,selected)
}

function getSum(selected, cousin){
  let sum_s = 1
  let sum_b = 0
  selected.map((idx)=>{
    sum_s*=cousin[idx][0]
    sum_b+=cousin[idx][1]
  })
  return [sum_s, sum_b]
}


// assert.strictEqual(getSum([1,2,3], cousin), [24, 23])
