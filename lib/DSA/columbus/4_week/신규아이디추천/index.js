/**
 * 
 * 아이디 규칙 
 * 길이 : 3이상 15이하
 * 소문자, 숫자, 빼기, 밑줄, 마침표만 사용가능
 * 마침표는 처음과 끝에는 사용할수 없음. 연속적으로 사용 x 
 * 
 * 
 * 
 * 
 */

const fs = require("fs")
const str = fs.readFileSync("./input.txt").toString().trim()

function makeLowerCase(str){
	return str.toLowerCase()	
}

function remove(str){
	return str.r
}
function solution(new_id){
	let answer = new_id
	//1단계 
	answer = makeLowerCase(new_id)
	//2단계  '!', '@', '#', '*'제거
	const regex = /[a-z0-9_\.\-]/g
	answer = remove(answer)
	return answer
}



console.log(solution(str)) //



