	const inputs = require('fs').readFileSync("./input.txt").toString().split("\n")

	const [n,k] = inputs[0].split(" ").map(Number)
	const coins = inputs.slice(1,).map(Number)
	const dp = Array.from({length:k+1},()=> 0)


	let minCnt = Infinity
	dfs1(k,0)
	console.log(minCnt)

	// 완전 탐색 재귀 
	function dfs( amount, cnt){

		if( amount === 0 ){
			// console.log(amount, cnt)
			minCnt= Math.min(minCnt, cnt)
			return 
		}

		for( let i =0; i<coins.length; i++){

			if( amount >= coins[i] ){
				dfs(amount-coins[i], cnt+1)
			}
		}
	}

	// memoization 
	// 각 가치마다 모두 확인해 봐야함
	// k이 15이니깐  3^15이 됨. -> 메모이제이션 필요 

	function dfs1(amount, cnt){
		// 4000원일 때 최소 금액을 안다는거니깐,,
		if(amount === 0){
			return 0
		}
		for( let i =0; i<coins.length; i++){

			if( amount >= coins[i] ){

				const temp = dfs(amount-coins[i], cnt+1)
				if( temp+1 < minCnt){
					// update
					minCnt = temp+1
				}
			}
		}

	}

	//dp
