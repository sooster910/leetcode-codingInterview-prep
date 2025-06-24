/**
 * @param {string} s
 * @return {string[]}
 */
var letterCasePermutation = function(s) {

    const result = []
    const totalChar = s.match(/[a-zA-Z]/g)?.length||0
    // totalChar 
    if(!totalChar) return [s]
    dfs( totalChar,[],s)

    function dfs(totalChar,selected,s){
        if( selected.length == totalChar){
            result.push([...selected])
            return 
        }
        
        for( upperOrlower of ["upper", "lower"] ){
            selected.push(upperOrlower)
            dfs(totalChar,selected,s)
            selected.pop()
        }
    }

    const answer =[]

    // result를 순회하면서, 각 result마다 
    for(const row of result ){
       let idx = 0
        let final= ""
       for(let i = 0; i< s.length; i++){
            if( s[i].search(/[a-zA-Z]/g)!==-1){
            if(row[idx]==="upper"){
                final+= s[i].toUpperCase()
            }else{
                final+= s[i].toLowerCase()
            }
            idx+=1
        }else{
              final+=s[i]
        }
       }
        answer.push(final)
    }
    return answer
};