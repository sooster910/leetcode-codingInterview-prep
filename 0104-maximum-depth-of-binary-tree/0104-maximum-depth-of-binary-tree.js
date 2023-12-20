/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
    
    
    return traverse(root, 0)
    
    function traverse(current, level){
        if(!current){
            return level
        }
        
        let leftLevel=0|| Math.max(leftLevel,traverse(current.left, level+1))
        let rightLevel=0|| Math.max(rightLevel,traverse(current.right, level+1))
        
        return Math.max(leftLevel, rightLevel)
        
    }
       
    
};