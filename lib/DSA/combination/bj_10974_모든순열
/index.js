/**
 * N이 주어졌을 때, 1부터 N까지의 수로 이루어진 순열을 사전순으로 출력하는 프로그램을 작성하시오.
 * N(1 ≤ N ≤ 8)
 * 시간복잡도 8!
 */


 //사전순으로 . 

 //n까지 순열 , 중복은 x
// 1 2 , 2 1  2에서 1을 뽑으려면 결국 for문을 전체 돌아야함. 여기서 조건분기처리 
// 이미 뽑은걸 처리하기 위해서 visited사용, 

const n= parseInt(require('fs').readFileSync("./input.txt").toString())
const visited = Array.from({length: Number(n+1)},()=>false)
const results =[]

dfs([])
console.log(results.join("\n"))

function dfs(selected){
	if(selected.length ==n){
		results.push(selected.join(" "))
		return 
	}

	for(let i =1; i <=n; i++){
		if( visited[i]) continue;

		// 처음인경우
		visited[i] = true
		selected.push(i)
		dfs(selected)
		visited[i] = false
		selected.pop()
	}
}

