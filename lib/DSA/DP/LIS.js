function longestIncreasingSubsequence(nums){

	const dp = Array.from({length: nums.length},()=> 0)

	for (let i = 0; i< nums.length; i++){
		let tempMax=0;
		for (let j =0; j<i; j++){
			if( nums[j] < nums[i]){
				dp[i] = Math.max(dp[i], dp[j])
			}
		}
		dp[i] +=1
	}

	console.log(Math.max(...dp))
	return Math.max(...dp)
}



// longestIncreasingSubsequence([10,9,2,5,3,7,101,18]) 
// longestIncreasingSubsequence( [0,1,0,3,2,3])
longestIncreasingSubsequence([7,7,7,7,7,7,7])

/**************************************************************
 * 
 *  가장 긴 증가하는 부분수열의 아이디어. 
 * 
 *  증가해야 한다 --> 이전 값과 비교해온 데이터가 필요하다.  -> DP가 필요하다 .
 *  
 *  DP 필요성을 확인했으면, 
 *  현재 위치.        ↓  
 *  NUMS =    [10,9,2,5,3,7,101,18]
 *             <-----        
 *  DP   =     10 과 9 를 보면서 DP[0]에 저장된 가장 긴 증가하는 부분수열과 DP[1]에 저장된
 *  가장 긴 증가하는 부분수열을 가져 온다. 
 *  
 *  나보다 작은 숫자가 왼쪽에 있다면, 그 DP값을 가져와서 +1을 해준다. 
 *  그런데 나보다 작은 숫자들이 왼쪽에 여러개 있다면??  그 DP값들 중에 가장 큰 값을 가져와서 +1 한다. 
 *  (가장 긴 <-- 문제 핵심 이므로)
 * 
 *  부분 수열 문제는 숫자를 사용할거냐 안할거냐의 선택의 문제이다. 
 * 
 *  2를 증가하는 부분수열에 포함 o  --> 1. 2보다 작은 숫자들이 있다 
 * 								 2. 그 숫자들이 포함되는 부분 수열 중에서 가장 증가 하는 부분수열 +1
 *   	  
 *  
 *  2를 증가하는 부분수열에 포함 x  --> 1. 2보다 작은 숫자 들이 없다.
 * 
 *

 * ****************************************************************/