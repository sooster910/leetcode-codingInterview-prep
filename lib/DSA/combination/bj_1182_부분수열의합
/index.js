const inputs = require("fs").readFileSync("./input.txt").toString().split("\n")

const [n,s] = inputs[0].split(" ").map(Number)
const arr = inputs[1].split(" ").map(Number)


let answer =0
dfs(0,0,0)
console.log(answer)
function dfs(depth, sum, cnt){
	if(depth === arr.length){
		// console.log("basecase", depth, arr[depth], sum)
		if(sum === s && cnt>0){ //cnt 는 선택한 부분수열의 개수를 나타내는데, 이걸 사용한 이유는 sum = 0 일 때, 부분 수열에서는 하나도 선택하지 않아도 0이 되므로 이 부분을 고려해 한개라도 선택한 부분수열에서라는 전제 조건임.

			answer+=1
		}
		return 
	}

	sum+=arr[depth]
	cnt+=1
	dfs(depth+1, sum, cnt)
	sum-=arr[depth]
	cnt-=1
	dfs(depth+1, sum, cnt)
}

