/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    // given an integer arry nums sorted 
    //two pointer
    //[1,1,1,2,2,3]
    // inplace로 변경해야함.
    // js에서는 replace()
    let left = 0, right=0
    
    while(left<=nums.length-1){
        
       while (right<=nums.length-1 ){
            
            if(nums[left]!==nums[right]){
                break
            }
        //만약 left와 현재가다르면 while문 탈출        right-left+1이 3이상이면탈출
            right++
        }
        
        //현재 right 를 splice한다.
        if(right-left>2){
            const lastIndex= left+2
            const numTobeDeleted = right-lastIndex
            nums.splice(lastIndex, numTobeDeleted)
            left =left+2
            right= left
            continue
        }
        
        left = right
  
    }
    return nums.length 
};