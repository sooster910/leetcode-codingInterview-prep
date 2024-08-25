/*

상근이가 가진 N개의 배열 숫자 카드와, 주어진 M개의 숫자 카드를 비교해서 상근이는 각 M개의 숫자 카드를 몇개 들고 있는지 
counting 하는 문제 이다. 

상근이는 중복된 숫자 카드를 가지고 있을 수 있으므로, mapper 에 상근이가 가진 { 카드넘버: 가진 카드수 }
매퍼를 만든다. 

시간복잡도 O(N)

*/

const fs = require('fs')

const input = fs.readFileSync("./input.txt").toString().trim().split("\n")

const n = Number(input[0]);
const n_arr = input[1].split(" ").map(Number);
const m = Number(input[2]);
const m_arr = input[3].split(" ").map(Number);

mapper = new Map()

for (const n of n_arr){
	//mapper 에 상근이가 가진 { 카드넘버: 가진 카드수 }
	mapper.set(n, (mapper.get(n)||0)+1) 
}

const answer = []

for (const m of m_arr){ //m 개의 숫자 카드를 순회하면서
	if(mapper.has(m)){ // 상근이가 m 카드를 가지고 있다면 
		answer.push(mapper.get(m)) // answer에 상근이가 가진 카드 뭉치번호 추가
	}else{ // 없다면
		answer.push(0) // 0 추가 
	}

}
console
.log(answer.join(" "))

