function trap(height: number[]): number {
    const leftMax = height.reduce((acc, cur, idx)=> {
        const max = Math.max(acc[idx-1]??0, cur)
        acc[idx] = max
        return acc
    },[])
    const rightMax = height.reduceRight((acc, cur, idx)=>{
        const max = Math.max(acc[idx+1]??0, cur)
        acc[idx] = max
        return acc
    },[])

    return height.map((h, idx)=>{
       return  Math.min(leftMax[idx], rightMax[idx]) - h
    }).filter(height=> height>0).reduce((acc, cur)=> acc+cur,0)

};
