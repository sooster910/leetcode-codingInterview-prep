/*
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.



test :  
    1. s = "()"  
    return true
    2. s = "(})" 
    return false
    3. s = ")()"
    return false
    4. s = "([])"
    return true
approach : 
    bruteforce: 
        two pointer :
        leftPointer, rightPointer 
        leftPointer "(" || "[" ||"{" 라면 대응하는 rightPointer가 있는가 있다면 -1,을 해서 좁혀나가는 방법 O(n/2)

    stack:
         - insert O(1)
         - push O(1)
         - pop O(1)
         - peek o(1) 
    
    timeComplexity: O(s.length)

pseudo code :
    initialize stack with empty stack 
    initialize hashmap with "{},[],()"
    iterate through s: 
        add open bracket to stack if character is open bracket
        initialize last bracket from the stack
        if backetMapper[lastbracket]!== chracter
            return false
        else:
            return true
*/


const isValid = (s)=>{
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
   return stack.length ===0 // 
}
console.log(isValid("["))
console.log(isValid("()[]{}"))
console.log(isValid("(]"))
console.log(isValid("([])"))