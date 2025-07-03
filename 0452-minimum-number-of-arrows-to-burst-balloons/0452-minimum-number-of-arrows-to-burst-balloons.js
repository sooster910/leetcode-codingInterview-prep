/**
 * @param {number[][]} points
 * @return {number}
 */

var findMinArrowShots = function(points) {
    //정렬
    let arrowNum = 0
    let lastEndPoint = -Infinity
    const sortedByEndPoints = points.sort((a,b)=>a[1]-b[1])
    for (const [start, end] of sortedByEndPoints){
        //start가  lastEndPoint보다 작으면, 겹침-> arrow X, lastEndPoint업데이트 x
        if(start>lastEndPoint){
            arrowNum+=1
            lastEndPoint= end//lastEndPoint업데이트
        }
    }
    return arrowNum
    
};