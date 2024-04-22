/**
 * @param {number} n
 * @param {number} headID
 * @param {number[]} manager
 * @param {number[]} informTime
 * @return {number}
 */
var numOfMinutes = function(n, headID, manager, informTime) {
    let adjList = Array.from({length: n+1},()=>[])
    //adjList = [[],[],[0,1,3,4,5] ]
    for (const employeeId in manager){
        if(manager[employeeId] === -1) continue
        adjList[manager[employeeId]].push(Number(employeeId))
    }

    let totalTime= 0
    let q = [[headID, 0]] 
    let visited = new Set([headID])
    
    while(q.length){
        const [current, accTime]=q.shift()
        for(const sub of adjList[current] ){ // 부하 직원

                q.push([sub, informTime[current]+accTime  ])
                // totalTime+= alreadyAdded? 0: informTime[current] //모든직원들에게 전달되는 시간은 1번만 넣기
                totalTime = Math.max(totalTime, informTime[current]+accTime  )
                
            
        }
    }
    return totalTime
   
    
};
