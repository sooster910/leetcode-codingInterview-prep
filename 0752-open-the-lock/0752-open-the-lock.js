var openLock = function(deadends, target) {
    const deadendsSet = new set(deadends)
    const visited = new set()
    const queue =[]

    // 초기설정
    let start = "0000"

    if (deadendsSet.has(start) || deadendsSet.has(target)){
        return -1
    }
    queue.push([start, 0])
    visited.add(start)

    while (queue.length){
        const [cur, turns] = queue.shift();
        if (cur === target){
            return turns
        }
        for(let i =0; i<4; i++){
            const curr_state = cur.split('')
            curr_state[i] = (parseInt(curr_state[i]) + 1) % 10
            const next_state = curr_state.join('')
            if (!visited.has(next_state) && !deadendsSet.has(next_state)){
                queue.push([next_state, turns + 1])
                visited.add(next_state)
            }
            curr_state[i] = (parseInt(curr_state[i]) + 8) % 10
            const prev_state = curr_state.join('')
            if (!visited.has(prev_state) && !deadendsSet.has(prev_state)){
                queue.push([prev_state, turns + 1])
                visited.add(prev_state)
            }

        }
        curr_state, turns = queue.popleft()

    }

};


openLock(["0201","0101","0102","1212","2002"], "0202")//6