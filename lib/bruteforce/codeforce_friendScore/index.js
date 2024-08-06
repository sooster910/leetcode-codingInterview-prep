/**

현재 나는 A이고, 
A-B-C  
이 경우 A-B 친구이고, 내친구 B가 한스텝 친구가 더 있다면 친구가 있다고 볼 수 있다. 
내가 직접적으로 누구랑 연결되어 있는지 찾고, 그 친구가 있으면  arr[ 현재 나][친구들]
arr[현재 나 ][친구] ===Y면 cnt++
arr[친구] 를 돌면서 친구가 1명이라고 있으면 cnt++ 한다.







*/
function solution(arr){
	console.log(arr)


}


console.log(solution(["NYNNN"," ","NYNYN","NNYNY","NNNYN"]))