/**
 * 요세푸스 문제는 1번부터 N번까지 N명의 사람들이 원을 이루어 앉아있는데, 
 * K번째 사람을 제거해서 한 명 남았을 때 몇번인지를 구하는 문제.
 * 
 * K번째 사람을 지우고 다시 K번째 사람을 지우기 위해 현재 자리 위치를 트래킹 해야 하는 
 * 변수가 필요하다.
 * 
 * 
 * 
 */

const fs = require('fs')

const input = fs.readFileSync("./input.txt").toString().trim().split(" ").map(Number)
const k = input[1];
const nums = Array.from({length:input[0]},(_, i)=>i+1 )
let start = 0 //삭제 후 배열의 길이와 index가 달라지므로 start를 이용해 삭제된 index 를 트래킹 히는 용도

// splice 사용
const answer =[] // 제거되는 순서가 담겨 있는 순열
while(nums.length >1){ // 남겨진 nums의 길이가 2이상일 경우는 while문을 계속 순회
	//제거하기 k번 째
	start = start+k-1 % nums.length // 이전 지워진 index를 기억하고, 그 인덱스에서+K-1 로 다음 지워야 할 인덱스를 찾는다. k번째 이므로 

	answer.push(nums.splice(start, 1)[0])	
}
answer.push(nums[0])

console.log("<"+answer.join(", ")+">")




