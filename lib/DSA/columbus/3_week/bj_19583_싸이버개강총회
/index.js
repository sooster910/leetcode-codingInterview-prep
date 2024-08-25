const fs= require('fs')
const inputs= fs.readFileSync("./input.txt").toString().trim().split("\n")
const [s,e,q] = inputs[0].split(" ")
const [s_hh, s_mm ] =s.split(":")
const [e_hh, e_mm] = e.split(":")
const [q_hh, q_mm ] = q.split(":")

const records = inputs.slice(1,)
const enterSet = new Set()
const leaveSet = new Set()             

const mapper = new Map()

for(const r of records){
	const [t, name ] = r.split(" ")
	const [hh,mm] = t.split(":")
	 
	if ( hh<s_hh ){
		enterSet.add(name)
	}else if (hh===s_hh && mm===s_mm){
		enterSet.add(name)
	}else if ( hh > e_hh && hh<q_hh){
		leaveSet.add(name)
	}else if(hh===e_hh ){
		leaveSet.add(name)
	}else if( hh===q_hh && q_mm === mm){
		leaveSet.add(name)
	}
}
let cnt = 0
for (const name of  enterSet){
	if(leaveSet.has(name)){
		cnt+=1
	}
}

console.log(cnt)