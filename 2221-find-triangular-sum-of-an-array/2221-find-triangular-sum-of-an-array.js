/**
 * @param {number[]} nums
 * @return {number}
 */
var triangularSum = function(nums) {
    while(nums.length > 1) {
        for(let i = 0; i + 1 < nums.length; i++) {
            nums[i] = (nums[i] + nums[i + 1]) % 10;
        }
        nums.pop();
    }
    return nums[0];
};