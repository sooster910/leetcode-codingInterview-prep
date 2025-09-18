function lengthOfLongestSubstring(s: string): number {
    //longest substring -> contiguous? true
    // no duplicate characters

    // abcabb
    //    i 
    // set (a,b,c) a 중복  
    // contiguous니간, 각 index까지 도착했을 때 최대 길이를 구해야함 
    // a b  c a b b
    // 1. 2 3 1 2 1
    
    // b b b b 
    //.1.1.1.1

    // abcdabcde
    // 123412345 

    let charIndexPositionMapper = new Map()
    let left =0, right= 0

    const dp = Array.from({length:s.length+1},()=>0)
    while(left<=right && right <s.length ){
        //twopointer이용 
        //left와 right 사이의 mapper를 매번 확인해줘야함
        //right가 기준이어야함. 
        if(!charIndexPositionMapper.has(s[right])){
            //중복된게 없으면 mapper에 추가 
            charIndexPositionMapper.set(s[right],right)
            let prev = right-1 <0? 0: right-1 
            dp[right]= dp[prev]+1 // dp에 longest substring 추가
            right++
        }else{
            //만약 중복이라면 
            //윈도우의 길이를 구해야함 
            // 구하는 방법은 현재 right - 이전 중복 index 
            const prevStart = charIndexPositionMapper.get(s[right])
            const len = right - prevStart
            
            // 그리고 비교해야함 max( 이전 길이,1 (현재index에서 출발 할것인지))
            dp[right] = Math.max(len,1)
            
            //left갱신 이전, 지금부터 다음 left 직전까지 다 지워야 함. 
            const nextLeft = prevStart+1
            removeMapper(left, nextLeft,charIndexPositionMapper,s )
            //mapper에 이전 index지우고, 현재로 갱신해야함 
            charIndexPositionMapper.set(s[right], right)
            //left 갱신 이전 중복 index+1로 와야함
            left = nextLeft
            //right도 앞으로 나가야 함 다음을 위해서 
            right++
        }
    }
    
    
    return s.length === 0 ? 0 :Math.max(...dp)

};


function removeMapper( start, end, mapper,s){
    //no include endIndex 
    for( let i =start; i<end; i++){
        const currentS = s[i]
        const endS = s[end]
        if(currentS === endS){
            //같으면 지우면 안됨.
            continue
        }
        mapper.delete( s[i])
    }
}