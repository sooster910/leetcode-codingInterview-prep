const [n,m] = require('fs').readFileSync("./input.txt").toString().split("\n")[0].split(" ").map(Number)


const arr = Array.from({length:n}, (_,i)=> i+1)
const results =[]

dfs(0, [])
console.log(results.join("\n"))
function dfs(start, selected){
	if(selected.length == m){
		results.push(selected.join(" "))
		return 
	}

	for(let i=start; i<arr.length; i++){
		selected.push(arr[i])
		dfs(i, selected)
		selected.pop()
	}
}
