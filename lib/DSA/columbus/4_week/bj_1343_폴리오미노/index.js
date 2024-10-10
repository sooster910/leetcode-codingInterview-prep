const fs = require('fs')

const inputs = fs.readFileSync("./input.txt").toString().trim()

let temp =[]
let answer=""
let flaseFlag = true
for(let i =0;i<inputs.length;i++){
	if(inputs[i] === "."){
		//전 단계에도 .인지 아닌지?
		if(i!==0 && inputs[i-1] ==="."){
			continue
		}else{
			if(temp.length%6 === 0){
				const tempStr = temp.join("")

				tempStr.replace("X", "AAAABB")
				inputs.slice(i-tempStr.length ,i).replace(tempStr)
				answer+=`.${tempStr}`
			}else if(temp.length%4 ===0){
				const tempStr = temp.join("")
				tempStr.replace("X", "AAAA")
				answer+=`.${tempStr}`
			}else if(temp.length %2 ===0){
				const tempStr = temp.join("")
				tempStr.replace("X", "BB")
				answer+=`.${tempStr}`
			}else{
				flaseFlag= false
				break
			}
			temp=[]
		}
	}else{
		temp.push(inputs[i])
	}
	console.log("temp", temp,answer)
}

if(!flaseFlag ){
	console.log(-1)
}else{
	console.log(answer)
}
