const fs= require('fs')

const input = fs.readFileSync('./input.txt').toString().trim()


let arr = Array.from({length:Number(input)},(i,j)=>  j+1)
let pointer= 0 
while(arr.length >=1){

	if(pointer == arr.length-1){
		break
	}
	if( pointer == arr.length-1){
		break
	}
	arr.push(arr[pointer+1])
	pointer+=2

}
console.log(arr[pointer])

