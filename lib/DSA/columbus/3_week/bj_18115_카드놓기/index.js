const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString().trim().split('\n');

const N = Number(input[0]);
const cards = input[1].split(' ').map(Number);

class Queue{
  item = []
  front = 0

  constructor(arr){
    this.item = arr ||[]
  }

  shift(){
    return this.item[this.front++]
  }

  push(val){
    this.item.push(val)
  }
  splice( idx, val){
    return this.item.splice(this.front+idx, val)

  }
  display(){
    return this.item.slice(this.front, )
  }
}
console.log(solveCardArrangement(N, cards))
function solveCardArrangement(N, A) {
    const cards = []
 
    A.reverse()
    // 기술 사용 순서대로 카드 배치 변경
    for (let i = 0; i < N; i++) {
      switch (A[i]) {
        case 1:
          // 제일 위의 카드 1장을 바닥에 내려놓기
          cards.unshift(i+1)
          break;
        case 2:
          // 위에서 두 번째 카드를 바닥에 내려놓기
          let a = cards.shift()
          cards.unshift(i+1)
          cards.unshift(a)
          break;
        case 3:
          // 제일 밑에 있는 카드를 바닥에 내려놓기
          cards.push(i+1)
          break;
      }
    }
    return cards.join(" ") // 결과를 역순으로 출력
  }
  
