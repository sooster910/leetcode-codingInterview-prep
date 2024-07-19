/**
 * 이 함수는 arr 에서 value가 총 몇 개 인지 카운팅 하는 유틸 함수
 * return 은 Map 
 * {key : key 횟수 }
 */


const countFreq = (arr)=>{
	return arr.reduce((acc, num)=>{
		return acc.set(num, (acc.get(num)||0)+1)
	},new Map())
}


// console.log(countFreq([1,2,3,1,1])) //  { 1=>3, 2=>1, 3=>1}


module.export = countFreq