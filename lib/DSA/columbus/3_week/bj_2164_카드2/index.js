/**
 * 1번카드가 제일 위, N번 카드가 제일 아래인 상태로 순서대로 놓여있는 카드에서 
 * 주어진 어떤 동작을 하고 난 후 남은 1장의 카드를 구하는 문제. 
 * 
 * 동작 - 제일위에 있는 카드를 버린다. 그다음 제일 위에 있는 카드를 제일 아래에 있ㄴ느 카드 밑으로 옮긴다
 * 반복한다 
 * 언제까지? 1장 남을 때까지
 *  
 * 주어진 카드의 수가 500,000 이다. JS에서 shift()를 사용해서 카드위치를 옮기거나 앞에 있는걸 빼면
 * 시간 초과가 될 수 있으므로 pointer를 두고 트래킹을 한다. 
 * 
 * 시간 복잡도 
 * O(n)
 */
const fs= require('fs')

const input = fs.readFileSync('./input.txt').toString().trim()


let arr = Array.from({length:Number(input)},(i,j)=>  j+1)
let pointer= 0 

while(true){  

	if(pointer == arr.length-1){  // pointer 가 arr.length-1이면 즉 1장 남은 마지막 카드임 
		break
	}
	
	arr.push(arr[pointer+1]) // 아래에 있는 카드를 밑으로 옮기는 동작
	pointer+=2 // 인덱스를 2칸 옮겨준다

}
console.log(arr[pointer])

