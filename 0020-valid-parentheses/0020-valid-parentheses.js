/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack = []
    const bracketMapper = { "{":"}", "[":"]", "(":")"}

   for (const char of s){
    if(char === "{" ||char===  "[" || char=== "("){
        stack.push(char)
    }else{
        const peek = stack[stack.length-1]
        if(peek&& bracketMapper[peek] === char ){
            //pop
            stack.pop()
        }else{
            return false
        }
    }
   } 
   return stack.length ===0 
};