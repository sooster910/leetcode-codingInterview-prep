/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    

    //inDegree
    let inDegree = new Array(numCourses).fill(0);
    let adjList = new Array(numCourses).fill(0).map(()=>[]);
    let pair;
    for (let i =0; i <prerequisites.length; i++){
         pair=prerequisites[i];
          inDegree[pair[0]] ++;
          adjList[pair[1]].push(pair[0]);    
        
    }
    
    
    //stack 
    
    let stack = [];
    let count = 0;
    let path =[];
    

    //inDegree가 0 인노드 찾기 
      for(let i =0; i<inDegree.length; i ++){
       if(inDegree[i] ===0) stack.push(i);
    }
    //stack 
    let currentNode ;
    while(stack.length ){
        count++;
        currentNode  =stack.pop();
        path.push(currentNode);
        
        // 인접 리스트 확인
     
        let adj = adjList[currentNode]
     
        adj.forEach((current)=>{
            inDegree[current]--;
            if(inDegree[current] === 0){
                stack.push(current)
            }
        })
      
        
    }
    
    return numCourses ===count;
};