# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def sumNumbers(self, root: Optional[TreeNode]) -> int:
        self.sum = 0 
        def dfs(node, cur):
            if(not node):
                return 0
            cur = (cur*10)+node.val
            if(not node.left and not node.right):
                return cur
            # total = 0
            # if(node.left):
            #     total+=dfs(node.left,cur)
            # if(node.right):
            #     total+=dfs(node.right, cur)
            # return total
            return dfs(node.left, cur) + dfs(node.right,cur)
        
        return dfs(root,0)