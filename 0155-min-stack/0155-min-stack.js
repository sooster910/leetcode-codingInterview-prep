
var MinStack = function() {
    this.items = []
    this.minStack = [] // 이 최솟값스택은, 기존 아이템부터 새로운 아이템이 있는 스택에서 최솟값을 보장하는 stack임.
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    this.items.push(val)
    if(!this.minStack.length || val< this.minStack[this.minStack.length-1]  ){
        //minstack에 아무것도 없으면 첫 아이템이 곧 min값 
        //val이 기존 peek 아이템 보다 작으면, 해당 리스트에서 최솟값 갱신
        this.minStack.push(val)
    }
    
};

/**
 * 
 * @return {void}
 */
MinStack.prototype.pop = function() {

    const poppedItem = this.items.pop()
    if(poppedItem === this.minStack[this.minStack?.length-1]){
        //minStack의 상태를 갱신해야함. 
        //꺼낸 아이템이 minStack의 최솟값이면 같이 빼줘야한다.
        this.minStack.pop()
    }

    
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.items[this.items?.length-1]

};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
   // 어떻게 O(1)으로 최솟값을 가져올수 있을까?
    // stack 정렬로 nlogn 
    // 애초에 넣을때?  linkedlist? 그래도 O(n)임... 
    return this.minStack[this.minStack?.length-1]
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */