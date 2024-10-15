const inputs = require('fs').readFileSync("./input.txt").toString().split("\n").map(Number)

const tc = inputs[0]
const operator = ["+","-"]
const results = []
let n=0
let arr=[]
for(let i =1; i<tc+1; i++){
	n=inputs[i]
	arr =Array.from({length:n},(_,i)=>i+1)

	dfs1([],0)
	console.log()	
	
	
}
function dfs1(result, depth){
	if(depth == n-1){
		let str="";
		//operator 길이만큼 
		for(let i =0; i<n-1;i++) str+=arr[i]+result[i];
		str+=arr[n-1] //마지막 숫자 
		
		current = eval(str.split(' ').join(''))
		if(current==0) console.log(str)
		return
	}
	for (let x of [" ", "+","-"]){
		result.push(x)
		dfs1(result, depth+1)
		result.pop()

	}
}

// function dfs(depth, selected){
// 	if(depth === n){
// 		let sum = 1
// 		let result = "1"
// 		for(let i =0; i<selected.length; i++){
// 			if(selected[i]===0){
// 				sum+=(i+2)
// 				result+=`+${i+2}`
// 			}else{
// 				sum-=(i+2)
// 				result+=`-${i+2}`
// 			}
// 		}
// 		if(sum === 0){
// 			results.push(result)
// 		}
// 		return 
// 	}

// 	for(let i=0; i<operator.length; i++){
// 		//operator 선택 
// 		selected.push(i)
// 		dfs(depth+1, selected)

// 		selected.pop()

// 	}
// }