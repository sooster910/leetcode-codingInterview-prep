/**
 * @param {string[]} deadends
 * @param {string} target
 * @return {number}
 */
var openLock = function(deadends, target) {
    // bfs를 이용해서 갈 수 있는 모든 경우의 수 찾기 
    const q = []
    q.push(["0000", 0])
    const visited = new Set("0000")
    let answer = -1
    const deadendsSet = new Set([...deadends])
    while(q.length){
        const [currentLock, changeNum ]= q.shift()
        if(deadendsSet.has(currentLock)){
            continue
        }
        if(currentLock === target){
            answer = changeNum
            break
        }
        //possible near next lock
        //한칸 올리거나 , 한칸 내리거나 
       
        for(let i =0; i<4; i++){
            //4번을 돌면서 해당 인덱스의 값을 +1, -1한 값
            let nextLock = ""
            
            for(const operator of ["+", "-"]){
                let newNum= ""
                if( operator === "+"){
                    newNum = (((Number(currentLock[i])+1)%10) + 10) % 10;
                    // i 번째만 변경하게 하기 
                }else if(operator === "-"){
                     newNum=(((Number(currentLock[i])-1)%10) + 10) % 10;
                }
                const currentLockArr = currentLock.split("")
                    currentLockArr[i]= newNum.toString()
                    nextLock = currentLockArr.join("")
                    
                
                if(!visited.has(nextLock)){
                    q.push([nextLock, changeNum+1])
                    visited.add(nextLock)
                }
            } 
        }
    }

    return answer
};