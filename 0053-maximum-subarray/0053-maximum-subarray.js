/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    //find subArray but largest sum 
    //subArray가 continuous? yes
    //길이는 상관없나? x
    //누적합? 
    // 투포인터?
    //-2  1 -3   4
     // -2 -1 -2   4
    // 1의 입장에서는 1이있고, 1,-2= -1,  여기서 이거 DP아닌가?
    // 1까지 왔을때 최대 sum은 자기자신, 혹은 이전값더하기 , 
    // 1,
    // -3일 때, 1-3= -2, 또는 -3  그래서 -2
    // 4일 때 4 똔느, -2+4= 2 그러면 4를선택 
    //   [5,  4,  -1, 7,  8]
     //     5   9   8   15  23

    //   [-2,1,-3,4,-1,2,1,-5,4]
    //    -2 1 -2 4 3  5 6 1  5          
    //
    //return sum
    //식을 구해보자
    // 자기자신값, 누적값+자기자신값 을 비교해서 더 큰걸 누적값에 넣는다.
     
    let accSum = 0
    

    const prefixSum = nums.map((num)=>{
        if(num>=accSum+num){
            accSum=num
            return num
        }
        if(accSum+num>num){
            accSum+=num
            return accSum
        }

    })
    
    return Math.max(...prefixSum)
};