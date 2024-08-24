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
    const cards = new Queue()
    const current = []
    // 카드 배열 초기화
    for (let i = 1; i <= N; i++) {
      current.push(i);
    }
    console.log("cards", cards.item)
    // 기술 사용 순서대로 카드 배치 변경
    for (let i = 0; i < N; i++) {
      switch (A[i]) {
        case 1:
          // 제일 위의 카드 1장을 바닥에 내려놓기
          cards.shift();
          console.log("shift", cards.display())
          break;
        case 2:
          // 위에서 두 번째 카드를 바닥에 내려놓기
          cards.splice(1, 1);
          break;
        case 3:
          // 제일 밑에 있는 카드를 바닥에 내려놓기
          cards.pop();
          break;
      }
    }
    console.log(cards.display())
    return cards.display() ; // 결과를 역순으로 출력
  }
  
