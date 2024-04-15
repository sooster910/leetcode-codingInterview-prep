/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function(rooms) {
    // there are n rooms labeled from 0 to n-1
    // 모든 룸을 다 돌아야 함
    // 키가 없으면 그 룸에 들어갈 수 없음. 
    // distinct keys를 찾아라. 
    // each key has a number on i
    // denotin
    let visited = new Set()
    function dfs(current){
        visited.add(current)

        for( const next of rooms[current]){
            if(visited.has(next)) continue
            dfs(next)
        }

    }
    dfs(0)

    return visited.size=== rooms.length

};