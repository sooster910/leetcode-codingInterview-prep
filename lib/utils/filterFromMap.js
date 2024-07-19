/**
 * 
 * 어떤 Map 이 들어 오면 filter 값에 대한 필터를 해줘서 배열로 리턴하는 함수 
 * 
 * 예 )  { 1=>3, 2=>1, 3=>1} 에서 value가 홀수인 것들 배열에 담아내기 
 * [1,2,3] 
 * 
 */

const countFreq = require('./countFreq.js')


function filterFromMap( mapper, filterPredicate){
	console.log("mapper", mapper)
}


filterFromMap(countFreq([1,2,3,1,1]), value%2 !== 0)
module.export = filterFromMap