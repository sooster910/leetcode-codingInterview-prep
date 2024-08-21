//key가 존재 하는지 확인 


const student_info = {}
student_info[2024390] = "카리나"
student_info[2024392] = "아이유"
student_info[2024393] = "장원영"
student_info[2024401] = "차은우"

console.log("student_info", student_info)

if(2024390 in student_info){
	console.log(student_info[2024390]) //숫자로 작성해도 문자열로 동작한다.
}else{
	console.log("학생이 존재하지 않습니다.")
}


//2.key와 value모두 접근

for(const [key,value] of Object.entries(student_info)){
	console.log(key,value)
}

console.log("=========Object.keys()=============")
Object.keys(student_info).map((key)=>{
	console.log( key,student_info[key])
})

console.log("========= in 연산자 ===========")
for( const key in student_info){
	console.log( key, student_info[key])
}


console.log(" =========getOwnPropertyNames=======")
Object.getOwnPropertyNames(student_info).forEach((key)=>{
	console.log(key, student_info[key])
})

/**
2024390 카리나
2024392 아이유
2024393 장원영
2024401 차은우
*/ 

//3.key들에 접근 
console.log(" ============Object.keys() ===========")
Object.keys(student_info).map((key)=>{
	console.log(key)
})

//4. value들을 접근

console.log("============Object.values() ==========")

Object.values(student_info).map(value => console.log(value))


// 4. key에 해당하는 value가져오기 

console.log( student_info[2024392] ) 


