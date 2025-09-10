/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */



//two pointer방법 
// list1pointer, 
// list2pointer 

// 1 2 4 
// 1 4 5
//     l
//   r
// 두개 모두 같으면 -> 같이 넣기 
// 두개 중 하나라도 작은게 있으면 , 작은걸 넣고 ++



var mergeTwoLists = function(list1, list2) {
    let first=list1
    let second = list2
    let merged= new ListNode();
    const result = merged
    // if( first.val === second.val){
    //     merged = new ListNode(first, second)
    // }else if( first.val<second.val){
    //     merged= new ListNode(first)
    //     first = first.next
    // }else if( second.val<first.val){
    //     merged = new ListNode(second)
    //     second = second.next
    // }

    // console.log("merged", merged, list1, second)

    //먼저  list1과 list2중 노드가 있는것을 찾은다음
    // 두개다 있다면 첫번째를 비교해서 작은걸 먼저 넣기 
    // 먼저 새로운 노드 만들기 
    // current를 정해놓고, 
    //
    while( first && second ){

        console.log(first.val, second.val)
        if( first.val <= second.val){
            merged.next = new ListNode(first.val)
            first= first.next   
        }else if(second.val <= first.val){
            merged.next =  new ListNode(second.val)
            second = second.next
        }
        merged = merged.next 
    }
    
    //마지막 
    if(first){
        merged.next = first 
    }else if( second){
        merged.next = second
    }
    return result.next
};