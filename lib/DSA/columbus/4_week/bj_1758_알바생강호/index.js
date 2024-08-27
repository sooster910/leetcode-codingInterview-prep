const fs = require("fs")

const inputs = fs.readFileSync("./input.txt").toString().trim().split("\n")

const n = inputs[0]

const tips = inputs.slice(1,).map(Number)


tips.sort((a,b)=> b-a)


for( let i =1; i<=tips.length; i++){
	//돈 -(받은등수-1)
	 tips[i-1] = tips[i-1] -(i-1)

}
const sum= tips.reduce((acc, cur)=>acc+(cur<0?0:cur),0)

console.log(sum)



