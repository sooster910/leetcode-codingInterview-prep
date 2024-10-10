const fs = require("fs")

const inputs = fs.readFileSync("./input.txt").toString().trim().split("\n")
const n = Number(inputs[0])
const s = Number(inputs[1])
const arr = inputs[2].split(" ").map(Number)


let answer = 0


dfs(-1,[])
console.log("answer", answer)


function dfs( idx, selected){
	console.log("idx", idx, selected)
	if(selected.length === 2){
		const sum = arr[selected[0]]+arr[selected[1]]

		if(sum === s){
			console.log(idx,selected )
			answer+=1
		}
		return

	}

	for(let i =idx+1; i<arr.length; i++){

		selected.push(i)
		dfs(i, selected)
		selected.pop()
	}

}