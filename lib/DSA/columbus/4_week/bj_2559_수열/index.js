const fs = require('fs')

const inputs = fs.readFileSync("./input.txt").toString().trim().split("\n")
const [n, k] = inputs[0].split(" ").map(Number)
const tempertures = inputs[1].split(" ").map(Number)

let end;
let sum = tempertures.slice(0,k).reduce((acc, cur)=> acc+cur, 0)
let maxSum = sum

for (let i =k; i<tempertures.length; i++){
	sum -= tempertures[i-k]
	sum += tempertures[i]
	maxSum= Math.max(sum, maxSum)	
}


console.log(maxSum )
