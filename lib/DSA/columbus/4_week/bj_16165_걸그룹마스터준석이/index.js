const fs= require('fs')

const inputs = fs.readFileSync("./input.txt").toString().trim().split("\n")

let [n,m]= inputs[0].split(" ").map(Number)

//n 걸그룹  //m 문제수 
let currentIndex = 1
const teamMapper = []
const memberMapper=[] //member는 team의 index에 추가한다.
let teamIndex = 0
while(n>0){
	const name = inputs[currentIndex++]
	const memberNum= Number(inputs[currentIndex++])
	const members = []
	for(let i =0; i<memberNum; i++){
		// members.push(inputs[currentIndex++])
		memberMapper.push([inputs[currentIndex++], teamIndex])
	}
	teamMapper.push(name)
	teamIndex++
	n--
}


//문제 받기 

while(m>0){
	const name = inputs[currentIndex++]
	const type = Number(inputs[currentIndex++])
	if( type === 0){

		// 팀의 이름 해당 팀에 속한  멤버의 이름을 사전순으로 
		const idx=teamMapper.findIndex((team)=> team ===name)
		
		const members = memberMapper.filter(([name, teamIdx]) => idx ==teamIdx)
		members.sort().map(([name,idx])=>{
			console.log(name)
		})
		// console.log(memberMapper[idx].sort((a,b)=>a-b))
	}else{
		//해당 멤버가 속한 팀의 이름을 력 
		const target = memberMapper.filter(([member, idx]) => member === name)[0]
		
		console.log( teamMapper[target[1]])
	}
	m--
}
