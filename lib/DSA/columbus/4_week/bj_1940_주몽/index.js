// N = 재료의 수 
// M =. 갑옷을 만드는데 필요한 수 
// 재료 번호 
// 갑옷은 두개의 재료를 만든다 .고유한 번호를 합쳐서 M이 되면 갑옷이 만들어 지게 된다.고유한

// N개의 재료중에서 2개를 뽑아 M이 되는 경우의 수 

// 갑옷 의 재료들을 나열해서 순회한다
// 재료 1번을 가지고 
// 나머지 재료들을 순회하면서 M이 되는지 확인한다.
// M이 만약 된다면, set 에 재료가 이미 있는지 확인한다. 
// 있다면 넘어가고 
// 없다면 set에 넣는다. 
// 멈춘다
// 다음 2번으로 넘어간다. 

const fs = require('fs')
const input =  fs.readFileSync("./input.txt").toString().trim().split("\n")
const N = input[0]
const M = Number(input[1])

const materials = input[2].split(" ").map(Number)


const materialSet = new Set(materials)

let cnt = 0
for (const num of materials){
	//target  = M-num
	const target = M-num
	if (materialSet.has(target)){
		cnt+=1
	}
}
console.log(Math.floor(cnt/2))