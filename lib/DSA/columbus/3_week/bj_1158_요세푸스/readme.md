## 1. 문제설명

---

요세푸스 문제는 1번부터 N번까지 N명의 사람들이 원을 이루어 앉아있는데, 
K번째 사람을 제거해서 한 명 남았을 때 몇번인지를 구하는 문제.

K번째 사람을 지우고 다시 K번째 사람을 지우기 위해 현재 자리 위치를 트래킹 해야 하는 변수가 필요하다.


## 2. 접근 방식

---

1. 시간복잡도(있다면 적을 것)
2. 문제 조건 분석 과정
3. 최종 선택한 자료구조/알고리즘 혹은 풀이 방법
Queue를 이용해서 O(1) 으로 줄였다. 


*위 3가지는 가이드라인일 뿐, 본인이 생각한 과정을 적으면 됨.
## 3. 틀린 이유 설명

---
→ 어디서 막혔는지 왜 막혔는지 자세하게 기술

- Queue를 직접 구현해 shift() 의 비효율적인 O(n)을 O(1)으로 변경 했으나 백준에서는 시간초과

```js

class Queue {
	items=[]
	front = 0
	rear= 0

	constructor(items, front, rear){
		this.items= items
		this.rear = this.items.length
	}

	get q_length() {
    	return this.items.length- this.front;
  	}

	push(item ){
		this.items.push(item)
		this.rear++
	}

	shift(){
		return this.items[this.front++]
	}

	first(){
		return this.items[this.front]
	}	
}
const q = new Queue(nums)

let answer = "<"

while(q.q_length>1){

	for(let i =0; i<k-1;i++){
		q.push(q.shift())
	}
	answer+=`${q.shift()}, `
}

answer+=`${q.first()}>`


console.log("answer", answer)

```

## 4. 올바른 접근 방식 및 해결 방식

---

1. 어떻게 해결했는지
2. 올바른 접근 방식은 뭔지
내장 함수인 splice()를 적용 


## 최종 코드
```javascript

const fs = require('fs')

const input = fs.readFileSync("./input.txt").toString().trim().split(" ").map(Number)
const k = input[1];
const nums = Array.from({length:input[0]},(_, i)=>i+1 )
let start = 0 //삭제 후 배열의 길이와 index가 달라지므로 start를 이용해 삭제된 index 를 트래킹 히는 용도

// splice 사용
const answer =[] // 제거되는 순서가 담겨 있는 순열
while(nums.length >1){ // 남겨진 nums의 길이가 2이상일 경우는 while문을 계속 순회
	//제거하기 k번 째
	start = start+k-1 % nums.length // 이전 지워진 index를 기억하고, 그 인덱스에서+K-1 로 다음 지워야 할 인덱스를 찾는다. k번째 이므로 

	answer.push(nums.splice(start, 1)[0])	
}
answer.push(nums[0])

console.log("<"+answer.join(", ")+">")

````

