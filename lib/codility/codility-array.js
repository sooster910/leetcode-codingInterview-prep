
/**
 * 
 * each element is shifted right by one , -> , last element of the array is moved to the first place,  rotation of array a = [3,8,9,7,6] is [ 6,3,8,9,7]
the goal is to rotate array A K times; that is each element of A will be shfted to the right K times
1 2 3 4 K = 4

   i.    0.        1.        2.     3.     4. 
after K  (0+4)%4.  (1+4)%4 = 1.    6.    

 * 
 * 
 * 
 */

function solution(A,K){
	let result = Array.from({length:A.length},()=> 0)
	for (let i =0; i<A.length; i++){
	 	result[(i+K)%A.length] = A[i]
	}
	return result
}

// solution([3, 8, 9, 7, 6],3)
// solution([0, 0, 0],1)
solution([1, 2, 3, 4], 4)

