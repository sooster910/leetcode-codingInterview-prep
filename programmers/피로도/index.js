const assert = require('assert')
/*
* 모든 던전을 다 돌면서 탐색해야 함. 대신 순서에 따라 최적화된 해를 찾을 수 있다.
* 조합이 아닌 순열을 통해 탐색할 수 있으며, 1 부터 시작하거나, 2부터 시작하거나, 3부터 시작하는 시스템이 되어야함.
* 0번째 던전 시작   1번째 던전 시작   2번째 던전 시작
*
*
*/
function solution(k, dungeons){

  let maxNumDungeons = 0
  let visited = new Set()

  dfs(k, 0)
  function dfs(currentEnergy ,start){

    for(let i = 0; i<dungeons.length; i++){
      const [requiredMinEnergy, consumeEnergy] = dungeons[i]
      if( currentEnergy >= requiredMinEnergy && !visited.has(i) ){
        visited.add(i)
        maxNumDungeons = Math.max( visited.size, maxNumDungeons)
        dfs( currentEnergy- consumeEnergy, i+1)
        visited.delete(i)
      }

    }
  }
  return maxNumDungeons



}

assert.strictEqual(solution(80, [[80,20],[50,40],[30,10]]), 3)
assert.strictEqual(solution(10, [[10,10],[6,1],[3,2]]), 2)
module.exports = solution