const fs = require('fs')

const input = fs.readFileSync('./input.txt').toString().trim().split("\n")

function solution(clothes) {
    const types = {};
    clothes.forEach(([_, type]) => {
        types[type] = (types[type] || 0) + 1;
    });
    
    return Object.values(types).reduce((acc, cur) => acc * (cur + 1), 1) - 1;
}

const [T, ...cases] = input; 
const answers = [];

for (let i = 0; i < cases.length;) {
    const n = Number(cases[i]);
    const clothes = cases.slice(i + 1, i + n + 1).map(line => line.split(' '));
    answers.push(solution(clothes));
    i += n + 1;
}

console.log(answers.join('\n'));