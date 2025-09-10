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
 * @return {TreeNode}
 */
var invertTree = function(root) {
    
    return invertOrder(root)
    
    function invertOrder(root){
        if(!root) return null
    
        let left=invertOrder(root.left)
        let right=invertOrder(root.right)
    
        root.right = left;
        root.left = right;
    
        return root;
    }
};