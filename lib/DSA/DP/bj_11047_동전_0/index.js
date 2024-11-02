/**
 * greedy 풀이 가능 : 이유는 제시된 동전들의 집합이 모두 배수이다. 
 */

const inputs = require("fs").readFileSync("./input.txt").toString().split("\n")

let [n,k] = inputs[0].split(" ").map(Number)
const coins = inputs.slice(1,).map(Number)
let minCoin = 0
let amount = k

const sortedCoins = coins.sort((a,b)=>b-a)


for(let i = 0; i<=sortedCoins.length; i++){
	if( amount === 0) break
	//현재 거스름돈이 coins[i]보다 크면 나눈다. 
	if(amount>=sortedCoins[i]){

		minCoin+=Math.floor(amount/sortedCoins[i]) //큰 동전을 쓸 수 있는 만큼 사용
		//거스름돈 갱신 
		amount = amount%sortedCoins[i]
	}

}

console.log(minCoin)