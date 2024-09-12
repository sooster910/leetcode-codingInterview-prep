/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    //if s is subsequence of t  -> true. false
    let answer = 0
    for (const char of s){
    let start = 0    
        for(let i = start; i<= t.length-1; i++){
            if( t[i] === char ){
                start = i+1
                answer+=1
                break
            }
        }
         
    }

    return answer === s.length
};