const fs = require('fs')
const inputs = fs.readFileSync("./input.txt").toString().split("\n")
const [n,m ] = inputs[0].split(" ").map(Number)
const arr = inputs[1].split(" ").map(Number)
console.log("arr",arr)

/**
 * 한 줄에 하나씩 문제의 조건을 만족하는 수열을 출력한다. 중복되는 수열을 여러 번 출력하면 안되며, 각 수열은 공백으로 구분해서 출력해야 한다.
 * 수열은 사전 순으로 증가하는 순서로 출력해야 한다.
 * 고른 수열은 오름차순이어야 한다.
 * (1 ≤ M ≤ N ≤ 8)
 * 최악의 경우 :8개수에서 8개를 뽑는 경우의 수 
 * 8!
 * _ _ _ _  4자리를 뽑는거라면 index기준 0번째가 가장 작고, 3번째 숫자가 가장 커야 한다 (오름차순)
 * 이 조건을 만족하기 위해선 자리수에 올 수 있는 모든 수를 구하는 for문에서 i가 이전 depth의 i보다 커야 한다.
 * 
 * 
 */

const sortedArr = arr.sort((a,b)=>a-b)

dfs(0, [])

function dfs(start, selectedNums){

	if( selectedNums.length === m){
		console.log(selectedNums.join(" "))
		return
	}

	for(let i = start; i<sortedArr.length;i++){
		selectedNums.push(sortedArr[i])
		dfs(i+1, selectedNums )
		selectedNums.pop()
	}
}