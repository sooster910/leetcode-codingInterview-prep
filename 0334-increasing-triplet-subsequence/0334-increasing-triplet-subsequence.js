/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function(nums) {
    
    const maxNum = Math.max(...nums)
    let first=maxNum, second = maxNum, third = maxNum
    console.log("second", second)
    for (const num of nums){
        if(num <=first){
            first = num
        }else if(num <=second ){
            second = num
        }else if( num >=second){
            return true
        }
    }

    return false
};