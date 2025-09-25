/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
    //every minute, 1인 토마토는 2로 변한다. 
    //이런 상황에서 모든 토마토가 2가 될 때까지 최소 시간을 구해라, 만약 모든 토마토가 2가 될 수 없는 상황이라면 -1리턴 
    //최초 1의 개수와 이후 
    //모든 2를 큐에 넣는다. 
    //그리고 주변 토마토가 1이여서 큐에 넣을 때 cnt++한다. 

    //최초에 grid를 순회하면서,1토마토의 개수를 세고, 1이 없으면 return  0
    //answr의 결론은 1의 토마토 개수와 실제 오염시킨 토마토의 개수를 비교해 같다면 minuts리턴, 틀리다면 -1 리턴한다.

    let minutes = 0
    // 함수형으로 2차원 배열에서 값이 1인개 몇개인지 찾아내기 
    let freshTomatoNum = 0
    const q = []
    let finalRottonTomato = 0

    for(let i = 0; i<grid.length;i++){
        for(let j= 0; j<grid[i].length; j++){
            freshTomatoNum+= (grid[i][j] === 1 ? 1:0)
            if( grid[i][j]===2) q.push([i,j,0])
        }
    }
    console.log("finalRottonTomato",finalRottonTomato,freshTomatoNum)
    
    if(!freshTomatoNum) return 0

    const dir = [[1,0 ],[0,1],[-1,0],[0,-1]]
    const visited = new Set()
    while(q.length>0){

        const [y,x, loopCnt] = q.shift()
        minutes = Math.max(minutes,loopCnt)
        
        for( const [dy, dx] of dir){
            const [ny, nx, nextLoopCnt] = [y+dy, x+dx, loopCnt+1]
            
            // 1이고  valid하고 방문안해봤다면 큐에 넣기 ,오염토마토 추가 
            if( ny>=0 && nx>=0 && ny<grid.length && nx<grid[0].length){
                if( grid[ny][nx] ===1){
                    q.push([ny, nx,nextLoopCnt])
                    // visited.add(`${ny}${nx}`)
                    finalRottonTomato+=1
                    grid[ny][nx] = 2
                }
                
            }
        }
        
    }
    console.log("last",finalRottonTomato,freshTomatoNum)
    return finalRottonTomato === freshTomatoNum? minutes : -1
    
};