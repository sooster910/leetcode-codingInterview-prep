const fs =require('fs')
const inputs = fs.readFileSync("./input.txt").toString().trim().split("\n")
const [n,m] = inputs[0].split(" ").map(Number)
const keys = inputs.slice(1, 1+n)


const setter = new Set()

for (const k of keys){
	setter.add(k)
}

const strs = inputs.slice(1+n, )


const count = strs.reduce((acc, cur) => {
  if (setter.has(cur)) {
    return acc + 1;
  }
  return acc;
}, 0);

console.log(count)

