/**
 * 이 방식은 위에서 아래로 호출하면서 내려가는 방식으로 top-down 동적계획법
 * 하위 문제를 평가하는 최적의 순서를 알 필요가 없다. 
 * 어떤의미? 
 * bottom-up 에서는 문제를 풀 때 하위문제를 볼 때 좀 더 규칙이 보인다. 순서대로 해야 한다는 것이다. 
 * top-down 은 트리로 순회를 하게 되면 순서가 bottom-up보다 직관적이지 않다. 
 * 왜냐하면 트리는 순회하다가 보이면 그 함수를 호출하고 다시 나오고 다른곳 순회하고 이런식인데, 
 * bottom-up은 전과 전전값이 완전히 존재 해야 한다
 * 
 */

function topdown(number){

	const cache = Array.from({length:number.length },()=>0)
	cache[1] =1
	cache[2] =1


	console.log(fibo(number))
	console.log("cahe", cache)

	function fibo(number){

		if(cache[number]) return cache[number] //이미 계산할 필요가 없는 것이다. 

		let sum = fibo(number-1) + fibo(number-2)
		cache[number] = sum

		return sum

	}
}


function bottomUp(n){
	const cache = Array.from({length: n},()=>0)

	//가장 작은 값을 먼저 봐야 한다.
	cache[0] = 0
	cache[1]=1
	cache[2] =2

	for(let i =3; i<=n; i++){
		cache[i] = cache[i-1] + cache[i-2]
	}
	console.log("bottomUp",cache)
	return cache[n]
}


(()=>{
	// topdown(6)
	console.log(bottomUp(6))
})()


/*********************************
 * 
 *     f(6)
 * 	   / \
 *   f(5) f(4)
 * 
 * f(6) 를 풀려면 f(5)와 f(4)라는 하위 문제를 풀어야 한다.
 * 이 때 이미 풀어놓은 하위문제 값을 사용하는게 memoization
 * 
 * ********************************/

/********************************************
 * 
 * 동적계획법과 메모이제이션은 엄밀히 말하면 다르다. 
 * 
 * - 전혀 다른 개념 
 * - 메모이제이션 : 실행된 결과를 기억해 두었다가 재사용 하는 최적화 기법 
 * - 동적계획법 : 복잡한 문제를 하위문제로 쪼개서 재귀적으로 푸는 방법 
 * 
 * 그러니깐 동적계획법 !== 메모이제이션, 동적계획법을 할 때 성능향상을 위해 메모이제이션을 사용한다.✅
 * 
 * 
 * 
 * **************************************************/


