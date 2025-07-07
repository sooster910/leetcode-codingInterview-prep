/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {

    const mapper = new Map()

    nums.forEach((num,idx)=> mapper.set( target-num ,idx))
    for(const idx in nums){
        if(mapper.has(nums[idx]) && mapper.get(nums[idx])!=idx  ){
            const pair= mapper.get(nums[idx])
            const numIdx = Number(idx)
            return [numIdx,pair]        
        }
    }
};