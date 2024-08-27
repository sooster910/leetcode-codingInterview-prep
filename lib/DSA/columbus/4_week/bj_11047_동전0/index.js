/**
 *  동전을 적절히 사용해서 가치 k가 되는 동전 개수중 최소 개수
 *  4200 
 *  1000*4 + 100*2 =  4200 총 6개
 */

const fs = require('fs')
const inputs = fs.readFileSync("./input.txt").toString().trim().split("\n")

let [n,k]= inputs[0].split(" ").map(Number)

const coins = inputs.slice(1,).map(Number)


let answer =0

for (let i = coins.length-1; i>=0; i--){
	if( k === 0){
		break
	}

	if (coins[i] <=k){
		answer+=Math.floor(k/coins[i])
		k=k%coins[i]
	}
}

console.log(answer)

