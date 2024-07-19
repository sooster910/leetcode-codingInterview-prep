/**
 * Halfling Woodlly Proudhoof 
 * Pen -> rectangular, 각 변은 같은 길이 이다.
 * threshold X보다 더 커야 한다. 
 * Woolly is intereested in the number of different ways in which 
 * he can build a pen 
 * 1*4 -> 2*2 는 다르다.
 * 
 * write function that givern an array A of N integers ->  and an integer X
 * return the number of different ways of building a rectangular pen 
 * 
 */

/**
 * 내가 이 문제를 헷갈려 했던 이유 : 
 * 조합을 구하는데 실제 주어진 개수까지 고려해서 조합을 구해야 하는 것까진 이해했는데,
 * 그렇게 되면 조합의 여러 상태가 되어 버려서  
 * 예를 들어 [1,1,2,2,3,3]  X=2 일 때, 
 * 
 * (1,2) 의 조합도 되고, (1,3)의 조합도 된다.
 * 
 * 여기서 현재 가진 개수를 고려해야 할지 안해도 되는지가 고민이었다.
 * 
 * 그리고 만약 개수를 고려한다면 
 * 그런데 현재 가진 개수를 고려하면 (1,2) 또는 (1,3)이 되는건데
 * 정답은 개수를 고려한 후 나올 수 있는 경우의 수 2가지 를 말하는건지
 * 현재 (1,2 ) 또는 (1,3) 만을 생각해서 1개를 리턴해야 하는지 고민이 되었다. 
 */

const  A =  [
  1, 2, 5, 1, 1,
  2, 3, 5, 1
]


// function solution(A,X){
//  	const mapper = A.reduce((acc, num)=>{
//         return acc.set( num, (acc.get(num) || 0)+1)
//     }, new Map())

//  	let answer = 0
//  	const keys = [...mapper.keys()]
//  	for(let i =0; i<keys.length ; i++){
//  		for( let j=i+1; j<keys.length; j++){

//  			if( keys[i]*keys[j] >= X && mapper.get(keys[i])%2=== 0 && mapper.get(keys[j])%2===0){
//  				answer+=1
//  				const res = mapper.get(keys[i])
//  				const upated = res>=2? res-2: 0				
//  				mapper.set(keys[i], upated)
//  			}
//  		}
//  	}
//  	return answer
//  }
function solution(A, X) {
   const fenceCount = new Map();
    for (const length of A) {
        fenceCount.set(length, (fenceCount.get(length) || 0) + 1);
    }

    const lengths = Array.from(fenceCount.keys()).sort((a, b) => a - b);
    let count = 0;

    for (let i = 0; i < lengths.length; i++) {
        for (let j = i; j < lengths.length; j++) {
            const width = lengths[i];
            const height = lengths[j];
            
            if (width * height < X) continue;

            if (i === j) {
                // 같은 길이를 사용하는 경우
                if (fenceCount.get(width) >= 4) {
                    count++;
                }
            } else {
                // 다른 길이를 사용하는 경우
                if (fenceCount.get(width) >= 2 && fenceCount.get(height) >= 2) {
                    count++;
                }
            }

            if (count > 1000000000) return -1;
        }
    }

    return count;
}
 // console.log(solution(A,5))
 console.log(solution([1,1,2,2,3,3],3))