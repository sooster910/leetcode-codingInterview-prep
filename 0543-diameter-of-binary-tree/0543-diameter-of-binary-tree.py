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
        # self.dfs(root,0)
        leftDepth=self.dfs(root.right,0)
        rightDepth=self.dfs(root.left,0)
        return  leftDepth+rightDepth
    def dfs(self, node, level):
        if not node:
            return level
        level+=1
        left=self.dfs(node.left,level)
        right=self.dfs(node.right,level)
        # self.maxDiameter = max(left+right, self.maxDiameter)
        return max(left, right)
       
        # return max(left, right)+1