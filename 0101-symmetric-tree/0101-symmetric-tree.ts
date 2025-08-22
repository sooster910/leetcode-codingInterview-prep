/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function isSymmetric(root: TreeNode | null): boolean {
    return traverse(root.left, root.right)
};


function traverse(tree1, tree2){
    //early return if not symetric
    if( tree1 == null && tree2 ==null) return true
    if( !tree1 || !tree2) return false

    return (tree1.val ===tree2.val)&& traverse(tree1.left, tree2.right) && traverse(tree1.right , tree2.left)
}