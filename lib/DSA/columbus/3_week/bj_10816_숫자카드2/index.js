const fs = require('fs')

const input = fs.readFileSync("./input.txt").toString().trim().split("\n")

const n = Number(input[0]);
const n_arr = input[1].split(" ").map(Number);
const m = Number(input[2]);
const m_arr = input[3].split(" ").map(Number);

mapper = new Map()

for (const n of n_arr){
	mapper.set(n, (mapper.get(n)||0)+1)
}

const answer = []
for (const m of m_arr){
	if(mapper.has(m)){
		answer.push(mapper.get(m))
	}else{
		answer.push(0)
	}

}
console
.log(answer.join(" "))

