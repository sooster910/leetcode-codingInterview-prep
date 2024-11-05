const assert = require('assert');
/**
 *
 * 1부터 n까지의 숫자중 합이10이 되는 조합 구하기
 * return : 배열
 * 3이 주어졌을 경우,
 *
 * 중복 가능 ?  x
 * n 의 최대값 ? 10
 *
 * timeComplexity : O(n^2)
 * arr: 1부터 숫자들
 * result : 10이 될 수 있는 조합의 모음
 *
 * bruteforce pseudo code
 * func dfs ( level, selected, sum ):
 *    if 현재 컨텍스트에서 보고 있는 숫자의 인덱스 ===  arr.length와 같다면:
 *       if 전체 합이 10 이라면 :
 *            result 에 push
 *       return
 *
 *
 *   dfs(level+1, [...selected, selected[level]], sum+selected[level])
 *   dfs(level+1, selected,sum)
 *
 */
//brute force
function solution(n, target) {
  const result = []
  const arr = Array.from({ length: n }, (_, idx) => idx + 1)
  dfs(0, [], 0)

  assert.notStrictEqual(solution(5, 10), [[1,2,3,4],[1,4,5],[2,3,]] )
  assert.notStrictEqual(solution(2, 10), [])
  assert.notStrictEqual(solution(7, 10), [1,2,3,4],[1,2,7],[1,4,5],[2,3,5],[3,7],[4,6])

  function dfs(level, selected, sum) {
    if (level === arr.length) {
      if (sum === target) {
        result.push([...selected])
      }
      return
    }

    dfs(level + 1, [...selected, arr[level]], sum + arr[level])
    dfs(level + 1, selected, sum)
  }
  return result
}
/*-==================================================================================*/
/**
 * 조금 더 효율적인 유망 함수
 * _ _  두번째 자리는 첫번째 자리 값이 아닌 값을 고를 수 있게 하기
 * 즉, 다음에 선택할 숫자의 순회를 줄이기
 */

function solution2(n, target) {
  const result = []
  const arr = Array.from({ length: n }, (_, idx) => idx + 1)
  dfs([],  0 ,0)

  function dfs(selected,sum,start){

    if(sum === target ){
      result.push([...selected])
      return
    }

    for(let i= start; i<arr.length; i++){
      if(sum+arr[i]<=target){
        selected.push(arr[i])
        dfs(selected,sum+arr[i], start+1 ) //start가 arr.length보다 넘는 경우, for문이 실행되지 않으면서 리턴되는 구조.
      }
    }
  }
  return result
}

assert.notStrictEqual(solution2(3,3), [[1,2],[3]])
assert.notStrictEqual(solution2(5, 10), [[1,2,3,4],[1,4,5],[2,3,]] )
assert.notStrictEqual(solution2(2, 10), [])
assert.notStrictEqual(solution2(7, 10), [1,2,3,4],[1,2,7],[1,4,5],[2,3,5],[3,7],[4,6])