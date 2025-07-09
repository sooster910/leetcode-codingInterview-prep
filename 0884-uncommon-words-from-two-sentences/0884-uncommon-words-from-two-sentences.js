/**
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */
var uncommonFromSentences = function(s1, s2) {
    const answer = []
    const s1Mapper = new Map()
    const s2Mapper = new Map()

    const s1Set = new Set([...s1.split(" ")])
    s1Set.forEach((word)=>s1Mapper.set(word,[0,0]))
    const s2Set = new Set([...s2.split(" ")])
    s2Set.forEach((word)=>s2Mapper.set(word,[0,0]))

    // 'this' => [ freqCnt, 다른곳에서 온 cnt,0또는 1만 가능],
    // 순회하면서, s1에 있으면 s1올리기 , s2에 있으면 s2에 카운트 올리기

//return할 때는 [1, 0]인것만 찾기 
    const s1Arr = s1.split(" ")
    const s2Arr = s2.split(" ")
    s1Arr.forEach((word)=> {
        const value = [s1Mapper.get(word)[0]+1,s1Mapper.get(word)[1]]
        s1Mapper.set(word, value)
        if( s2Mapper.has(word)){
            const value = [s2Mapper.get(word)[0],s2Mapper.get(word)[1]+1]
            s2Mapper.set(word, value)
        }
    })


    s2Arr.forEach((word)=> {
        const value = [s2Mapper.get(word)[0]+1,s2Mapper.get(word)[1]]
        s2Mapper.set(word, value)
        if( s1Mapper.has(word)){
            const value = [s1Mapper.get(word)[0],s1Mapper.get(word)[1]+1]
            s1Mapper.set(word, value)
        }
    })

    s1Mapper.forEach(([cnt1, cnt2], key)=>{
        // key, value 로해야함 
        if(cnt1 === 1 && cnt2 === 0){
            answer.push(key)
        }
    })
    
    s2Mapper.forEach(([cnt1, cnt2],key)=>{
        if(cnt1 === 1 && cnt2 === 0){
            answer.push(key)
        }
    })
    return answer
};