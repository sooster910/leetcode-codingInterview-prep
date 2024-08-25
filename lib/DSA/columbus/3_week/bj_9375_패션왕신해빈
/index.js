/**
 * 의상 종류 별로 꼭 하나씩은 입어야 하는 조합을 구하는 문제이다. 
 *  
 * 주어진 입력에서는 같은 종류에 여러개의 아이템이 포함될 수 있다. 
 * 예를 들어 headgear 에는 hat, turban이 포함되어있으므로, 해빈이가 선택을 할 때 hat도 선택하는걸 고려해야하고, 
 * turban을 선택하는것도 고려해야 한다. 
 * 
 * 접근 방법은 각 종류마다 선택하는 경우의 수를 구하는 것이 중요하다.
 * 
 * headgear 가 2 개 있으면 경우의 수는 -> hat 고르거나, turban고르거나, 안고르거나 -> 3가지 
 * eyewear 가 1개 있으면 경우의 수는 -> sunglass 고르거나 안고르거나 ->2가지 
 * 3*2-1( 모두 안고른 경우의 수  제외 문제에서 알몸이 아닌 상태라고 했으니 알몸인 상태는 제외)
 * 
 * O(n+m) => O(n)
 * 
 */
const fs = require('fs')
const input = fs.readFileSync('./input.txt').toString().trim().split("\n")


//O(m)
function solution(clothes) {
    const types = {};
    clothes.forEach(([_, type]) => { //주어진 옷들을 순회하면서
        types[type] = (types[type] || 0) + 1; // 같은 종류의 옷을 mapping하고, 카운팅한다
    });
    //옷의 종류를 순회하면서, 각 옷의 종류에서 옷의 수(1개 고르는 경우의 수 ) +1 (안입는 경우) 
    return Object.values(types).reduce((acc, cur) => acc * (cur + 1), 1) - 1; 
}

const [T, ...cases] = input; 
const answers = [];
//O(n)
for (let i = 0; i < cases.length;) {
    const n = Number(cases[i]);
    const clothes = cases.slice(i + 1, i + n + 1).map(line => line.split(' '));
    answers.push(solution(clothes));
    i += n + 1;
}

console.log(answers.join('\n'));