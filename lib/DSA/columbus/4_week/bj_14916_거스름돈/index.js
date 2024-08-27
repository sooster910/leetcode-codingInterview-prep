/**
 * 2원짜리 , 5원짜리로만 이용해 거스름돈을 돌려줄 때 최소개수 
 * 
 * n = 13
 * 5*1 + 2*7
 * 13을 2로 나눠보거나 6
 * 13을 5로 나눠보거나  
 */

const fs = require('fs')
const n = fs.readFileSync("./input.txt").toString().trim()
let cnt=0
const dp = Array.from({length: Number(n)+1},()=> Number.MAX_SAFE_INTEGER)

dp[0]=0

 // DP 배열 채우기
    for (let i = 1; i <= n; i++) {
        if (i >= 2) {
            dp[i] = Math.min(dp[i], dp[i-2] + 1);
        }
        if (i >= 5) {
            dp[i] = Math.min(dp[i], dp[i-5] + 1);
        }
    }
const answer = dp[n]!=Number.MAX_SAFE_INTEGER?dp[n]:-1

console.log(answer)