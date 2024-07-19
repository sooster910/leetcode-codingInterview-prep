/**
 * given an array A of N integers, returns the smallest positive integer , that does not occur in A
 * 
 * [1,3,6,4,1,2] 여기서 N integers니깐 N = 6 이다. 1부터 6까지 숫자 중에서 A에 없는것 찾기 
 * 
 * 1부터 6까지 for문으로 순회하면서 set에 있는지 확인 없으면 그거 리턴, 만약 다 있다면, N+1리턴, 만약 다 없다면 
 * 양수 중 가장 작은 수니깐 음수일 경우는 그냥 skip 
 */

function solution(A) {
    // Implement your solution here
    
    let set = new Set(A)
    let newArray = [...set]
    newArray.sort((a,b)=>a-b)
    console.log("set ",newArray)
    let smallestNum = 1
    for ( let i =1; i<=A.length; i++){
        smallestNum = i
        if( !set.has(smallestNum)){
            console.log("yes",smallestNum)
            return smallestNum
        }
    }

    return smallestNum+1
    
}


console.log(solution([1,3,6,4,1,2]))
console.log(solution([1,2,3]))
solution([-1,-3])