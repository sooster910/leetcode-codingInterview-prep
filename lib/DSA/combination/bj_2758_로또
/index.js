const inputs = require('fs').readFileSync("./input.txt").toString().split("\n")
const tc= inputs[0]

for (let i =0; i<tc; i++){
	const [n,m] = inputs[1].split(" ").map(Number)
	const arr = Array.from({length: m},(_, i)=>i+1 )
	const result = solveLotto(n,m)
	// const result = dfs(n,m, 0,[],[], arr)
	console.log(result)
}

function solveLotto(n, m) {
    // 2차원 DP 배열 생성 및 0으로 초기화
    // dp[선택한 개수][마지막 선택한 숫자]
    const dp = Array.from({length: n + 1}, () => Array(m + 1).fill(0));
    
    // 1) 첫 번째 숫자 선택하는 경우 초기화
    // 각 숫자는 한 번씩 선택 가능
    for(let i = 1; i <= m; i++) {
        dp[1][i] = 1;
    }
    
    // 2) 두 번째 숫자부터 n번째 숫자까지 선택
    for(let selected = 2; selected <= n; selected++) {
        for(let last = 1; last <= m; last++) {
            // 현재 숫자(last)의 절반보다 작거나 같은 이전 숫자들만 가능
            for(let prev = 1; prev <= Math.floor(last/2); prev++) {
                dp[selected][last] += dp[selected-1][prev];
            }
        }
    }
    
    // 3) n개를 모두 선택했을 때 가능한 경우의 수 합계 반환
    return dp[n].reduce((sum, count) => sum + count, 0);
}


function dfs(n, m, start, selected,result,arr){

	if(selected.length === n){
		const converted = selected.map((v)=> arr[v])
		console.log("converted", converted)
		result.push(converted)
		return 
	}


	for(let i = start; i<m; i++){
		// console.log("arr",arr,selected)
		const current = arr[i]
    	const prev = arr[selected[selected.length-1]]
		if( (!selected.length) || current >= prev*2){
			// console.log("a",selected, i, arr[i], arr[selected.length-1])

			selected.push(i)
			dfs(n,m, i+1, selected, result, arr)
			selected.pop()
		}
	}

	return result
}