function maxSubArray(nums: number[]): number {
    //find subArray. -contiguous
    // compare prefix and current num
    //[-2,   1,   -3,  4,-1,2,1,-5,4]      

    if( nums.length === 1) return nums[0]
    let max = -Number.MAX_SAFE_INTEGER
    const maxTracker = [nums[0]]
    
    for(let i = 1; i<nums.length; i++){
        const maxValue = Math.max( nums[i], maxTracker[i-1]+ nums[i])
        maxTracker.push(maxValue)
        max = Math.max(maxValue, max)
    }
    return max
};