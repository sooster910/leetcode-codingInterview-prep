/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    //if s is subsequence of t  -> true. false
    let answer = 0;
    let start = 0;
    if( s.length> t.length) return false
    for( const char of s ){
        for(let i = start; i<=t.length-1; i++){
            if(char === t[i]){
                answer+=1
                start= i+1
                break
            }
        }
    }
    return answer === s.length
};

