
/***********************************************
stack 2개로 큐를 구현하기 
in_stack: 입력스택- 큐에서 요소를 추가할 때 사용하는 스택 
out_stack: 출력 스택 - 큐에서 요소를 제거할 때 사용하는 스택

enqueue - insertion
- add a new item to in_stack
dequeue - deletion
- 출력스택이 비어있으면, 입력 스택의 모든 요소를 파악해서pop하여 출력스택에 push
- 출력스택에서 pop하여 요소를 제거
- time complexity o(n)

pseudo code:

class queue:
    init()
        in_stack=[]
        out_stack=[]
    enqueue():
        in_stack.push(item) - O(1)

    dequeue():
        if not out_stack:
            while in_stack:
                out_stack.push(in_stack.pop())
        else : 
            //error


    peek():
        if(!out_stack):
            return 
        out_stack.append(in_stack.pop())
        
        
 *************************************************/
    // 가장 처음에 들어온 원소가, out_stack으로 이동되는 과정에서 원소의 위치가 가장 끝에 위치함으로써 stack.pop 의 O(1) 복잡도를 이용해 dequeue를 구현

function Queue (){
    const in_stack =[]
    const out_stack = []


    const enqueue=(item)=>{
        in_stack.push(item)
    }
    const dequeue= ()=>{
        // in_stack 에 원소들을 확인 
        // in_stack에 원소가 있으면 out_stack으로 옮김, outstack pop
        // in_stack에 원소가 없으면 
        // outstack pop
        if( in_stack.length ){
           while(in_stack.length){
             out_stack.push(in_stack.pop())
           } 

        }
        if( !out_stack.length) return new Error("no item in stack")

        return out_stack.pop()

    }

    const peek = ()=>{
        //instack에 원소가 있으면 outstack으로 옮겨줌, 
       
          while(in_stack.length){
            out_stack.push(in_stack.pop())
          }  
        if( !out_stack.length) return []
        return out_stack[out_stack.length-1]
    }

    const empty = ()=>{
        return !in_stack && !out_stack
    }

    return {
        enqueue,
        dequeue,
        peek,
        empty
    }
}

const q = Queue()
q.enqueue(1)
q.enqueue(2)
q.enqueue(3)
console.log(q.dequeue()) //1
console.log(q.peek())//2
console.log(q.dequeue())//2
console.log(q.dequeue()) //3
console.log(q.dequeue()) //3
q.enqueue(4)
q.dequeue()