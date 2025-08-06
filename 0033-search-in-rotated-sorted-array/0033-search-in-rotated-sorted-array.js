/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let left = 0, right = nums.length-1

    while(left<=right){

        let mid= Math.floor((left+right)/2)
        if( nums[mid]=== target){
            return mid
        }

        // 오른쪽과 왼쪽에서 오른차순이 있는 부분을 찾아야 합니다. 
        // 이걸 찾는 로직은 left<= mid 일 때, left에 오름차순입니다. 
        if( nums[left]<= nums[mid] ){
            // left사이드는 오름차순 
            if(nums[left]<=target && target<=nums[mid]){
                // target이 left와 mid사이에 있는경우, 
                right = mid-1 // 오른쪽을 줄입니다. 

            }else{
                // target이 left와 mid사이에 없는경우
                // right를 mid-1로 갑니다. 
                left = mid + 1 // 왼쪽을 줄입니다.
            }
        }else{
            // right
            // 오른쪽이 오름차순입니다.
            // 마냥ㄱ target이 mid와 right사이에 있는지 확인합니다. 
            if( nums[mid] < target && target <=nums[right]){
                //left를 mid+1로 갑니다. 
                left = mid + 1 // 왼쪽을 줄입니다.
            }else{
                // target이 mid와 right사이에 없는경우
                right = mid - 1 // 오른쪽을 줄입니다.
            }

        }

    }

   
    return -1; 
};