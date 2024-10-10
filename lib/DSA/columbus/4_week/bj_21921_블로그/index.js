const fs = require('fs')

const inputs= fs.readFileSync("./input.txt").toString().trim().split("\n")

const [n,x] = inputs[0].split(" ").map(Number)

const visitFreq = inputs[1].split(" ").map(Number)

const freqMapper= new Map()
let sum = visitFreq.slice(0, x).reduce((acc, cur)=> acc+cur,0)

freqMapper.set( sum ,1)

let max = sum
for(let i=x; i<visitFreq.length; i++){

	sum+=visitFreq[i]
	sum-=visitFreq[i-x]

	freqMapper.set(sum, (freqMapper.get(sum)||0)+1) 
	max = Math.max(max, sum)

}

if(max >0){
	console.log(max)
	console.log(freqMapper.get(max))
}else{
	console.log("SAD")
}