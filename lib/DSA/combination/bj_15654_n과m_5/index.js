const fs = require("fs")
const inputs = fs.readFileSync("./input.txt").toString().split("\n")
const [n,m]= inputs[0].split(" ").map(Number)
const arr = inputs[1].split(" ").map(Number)

/**
 * N개의 자연수 중에서 M개를 고른 수열
 * 한 줄에 하나씩 문제의 조건을 만족하는 수열을 출력한다. 중복되는 수열을 여러 번 출력하면 안되며, 각 수열은 공백으로 구분해서 출력해야 한다.
 * 수열은 사전 순으로 증가하는 순서로 출력해야 한다
 * 사전순 의미 : 102, 120, 이렇게 사전순
 *  
 */
console.log("inputs",arr)


let visited = Array.from({length:n+1},()=> false)
const sortedArr= arr.sort((a,b)=> a-b)
dfs(0,[])

function dfs(depth, selected){
	if(depth === m){
		//base condition 
		console.log(selected.join(" "))
		return
	}

	for(let i =0; i<n;i++){
		if(!visited[i]){
			selected[depth]=  sortedArr[i]
			visited[i] = true
			dfs(depth+1, selected)
			visited[i]=false

		}
	}
}