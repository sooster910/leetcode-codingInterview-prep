function merge(intervals: number[][]): number[][] {
    // merge all overlapping intervals,
    // return array of the non-overlapping intervals,
    // 주어진 구간들이 오름차순이 이미 되어있는가? x
    // intervals.length <= 10^4 이므로 O(n log n) 까지는 가능
    //[0,0] 잉 들어오면,
    // 1. sort the intervals by start time
    // 겹치는게 있으면 merge를 일단 먼저 한다.
    const results= []
    intervals.sort( (a,b) => a[0] - b[0] )
    let [prevStart, prevEnd] = intervals[0]
    for ( const [start, end] of intervals ) {
        // overlap인지 판단하기
        if( start <= prevEnd ) {
            // merge
            prevStart = Math.min(prevStart, start)
            prevEnd = Math.max(prevEnd, end)

        }else{
            //no overlap
            // push the previous interval to result
            results.push([prevStart, prevEnd].slice())
            prevStart = start
            prevEnd = end
        }

    }
    // 마지막 interval 추가
    results.push([prevStart, prevEnd].slice())
    return results
};
