function search(nums: number[], target: number): number {
    // get binary search 
    let left=0, right=nums.length-1

    while( left <= right) {
        const mid= Math.floor((left+right)/2)
        // mid 가 target과 같으면 return 
        if( nums[mid] === target) return mid
        if( target < nums[mid]){
            //  작으면,mid -1
            right= mid-1  
        }else if( target>nums[mid]){
            // 크면 mid+1
            left= mid+1
        }


    }
    return -1
};