function solution( A,X) {
    // Implement your solution here
    const setter = new Set()

    for ( let i =0; i<A.length; i++){
        setter.add(A[i])
        // console.log("setter", setter)
        if(setter.size ===X) {
            return i
        }
    }

    return -1
}


console.log(solution([1,3,1,4,2,3,5,4],5))