const assert = require('assert');
	const inputs = require('fs').readFileSync("./input.txt").toString().split("\n")

	const [n,k] = inputs[0].split(" ").map(Number)
	const coins = inputs.slice(1,).map(Number)
	const dp = Array.from({length:k+1},()=> Infinity)


	let minCnt = Infinity
	// dfs1(k,0)
	// console.log(minCnt)
  // dfs2(k)
	// if(dp[k] !==Infinity){
	// 	console.log(dp[k])
	// }else{
	// 	console.log(0)
	// }

	// findMin([1,2,3],0)
assert.strictEqual(findMinWithCondition([1,2,3],0), 2)
// assert.strictEqual(findMinWithCondition([4,6,2,7,5],0), 2)
	// 완전 탐색 재귀


	function dfs1(amount){
		// 4000원일 때 최소 금액을 안다는거니깐,,
		if(amount === 0){
			return 0
		}

		let result = Infinity;

		for( let i =0; i<coins.length; i++){

			if( amount >= coins[i] ){

				const temp = dfs(amount-coins[i])
				if( temp+1 < result){
					// update
					result = temp+1
				}
			}
		}
		return result
	}

// console.log(Number(12).toString(1))

	// memoization
	// 각 가치마다 모두 확인해 봐야함
	// k이 15이니깐  3^15이 됨. -> 메모이제이션 필요
	function dfs2(amount){
		if( amount ===0){
			return 0
		}
	 	if(dp[amount] !==Infinity){
			//dp에 이미 값이 있다면, 더 이상 탐색하지 않고 바로 리턴
			return dp[amount]
		}

		for( let i =0; i<coins.length; i++){
			if( amount >= coins[i] ){
				// return 후 돌아와서,
				const temp = dfs2(amount-coins[i])+1
				if(temp < dp[amount]){
					//기존에 있는 값보다 작으면 갱신
					dp[amount] = temp
				}
			}
		}
		// return dp[amount]
	}


	function findMin(arr, index) {
		// 1. 종료 조건
		if (index === arr.length - 1) {
			return arr[index];
		}

		// 2. 현재값과 나머지 값들 중 최소값 비교
		const minOfRest = findMin(arr, index + 1);
		//return 후 pop된 상태
		return Math.min(arr[index], minOfRest);
	}

	function findMinWithCondition(arr, index){
		if (index === arr.length-1) {
			return arr[index];
		}
		const minValue = Infinity
		const minOfRest = findMin(arr, index + 1);
		if( minOfRest <= minValue ){
			if(minOfRest%2===0){
				return minOfRest
			}
			return minOfRest
		}else{
			return minValue
		}

	}