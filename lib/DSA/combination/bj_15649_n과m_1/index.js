/**
 * 
 * n과m(1)
 * 1부터 n까지의 숫자 중에서 m개를 나열하는 수열 작성
 * 조건: 1<=M<=N<=8
 * 최악의 시간 복잡도 :  
 * 1부터 8중에 8개 선택해서 나열하기 
 * 
 * _ _ _ _ _ _ _ _ _
 * 8 7 6 7  .....    = 8!
 * 
 * 중복 x, 사전순으로 증가하는 순서로 출력 
 * 
 */

const [n,m] = require('fs').readFileSync("./input.txt").toString().split("\n")[0].split(" ").map(Number)

// dfs([])

//시간: 	1560ms
function dfs(selected){

	if(selected.length === m){
		console.log(selected.join(" "))
		return
	}

	for(let i=1; i<=n; i++){
		if(!selected.includes(i)){
			selected.push(i)
			dfs(i+1, selected)
			selected.pop()
		}
	}
}

/**
 * 시간 : 208ms
 * 개선된 코드: 
 * 
 * includes로 O(n)보다, O(1)으로 배열인덱싱을 사용해 현재 요소가 visited에 포함되어있는지 중복검사  
 * 다른점으로는 원소를 모두 인덱스로 처리한다.  
 */

/* 1-n까지의 숫자를 arr에 담기 */
const arr = Array.from({length: n }, (_, i)=>i+1 )
/*방문처리*/
const visited = Array.from({length: n+1}, ()=> false) 

const results = []

dfs1([])

console.log(results.join("\n"))

function dfs1(selected){ 
	if(selected.length === m){
	

		/*선택한 인덱스를 실제 arr의 index로 접근해 value넣기*/
		const temp = selected.map((v,i)=> arr[v])
		results.push(temp.join(" "))
		return 
	}

	for(let i=0; i<arr.length; i++){
		if(visited[i]) continue; //이미 있는 원소라면 무시 
		visited[i] = true
		selected.push(i) // 원소의 index를 select한다.
		dfs1(selected)
		selected.pop()
		visited[i] = false

	}
}