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
    
    invertOrder(root)
    return root
    function invertOrder(root){
       if(!root) return
    
        invertOrder(root.left)
        invertOrder(root.right)
    
        // root.right = left;
        // root.left = right;
        swap(root)
        return root;
    }
        function swap(root){
        let temp = root.left
        root.left = root.right
        root.right = temp
    }
};