/**
 * @param {number[]} nums
 * @return {boolean}
 */
var checkPossibility = function(nums) {
    let count = 0; // 감소하는 지점의 개수
    
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] > nums[i + 1]) {
            count++;
            
            // 감소 지점이 2개 이상이면 불가능
            if (count > 1) {
                return false;
            }
            
            // 수정 전략 결정
            // Case 1: nums[i]를 수정하는 경우
            // i-1이 없거나, nums[i-1] <= nums[i+1]이면 nums[i]를 nums[i+1]로 수정 가능
            if (i === 0 || nums[i - 1] <= nums[i + 1]) {
                nums[i] = nums[i + 1];
            }
            // Case 2: nums[i+1]를 수정하는 경우
            // nums[i+1]을 nums[i]로 수정
            else {
                nums[i + 1] = nums[i];
            }
        }
    }
    
    return true;
// 3 4 2

// 3 4 3 
//     
//.1  4. 3 
//  next가 현재보다 작음, min (3, 2)
   

};