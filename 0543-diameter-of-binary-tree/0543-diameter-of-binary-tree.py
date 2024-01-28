# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def __init__(self):
        self.maxDiameter = 0
    def diameterOfBinaryTree(self, root: Optional[TreeNode]) -> int:  
        leftDepth=0
        rightDepth=0
        self.dfs(root)
        # this.dfs(root.right)
        return self.maxDiameter
    def dfs(self, node):
        if not node:
            return 0
        left=self.dfs(node.left)
        right=self.dfs(node.right)
        self.maxDiameter = max(left+right, self.maxDiameter)
       
        return max(left, right)+1