/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
   

    //brute force 
    //timecomplexity:  10^5 *10^5 
    let currentIdx= 0;
    let result = [];

    while(currentIdx<nums.length){ 
    let product = 1;
    for(let i =0; i<nums.length; i++){
         if(i!==currentIdx) {
            product *= nums[i];
         }
    }
    result.push(product);
    currentIdx++;
    }

    return result;
};