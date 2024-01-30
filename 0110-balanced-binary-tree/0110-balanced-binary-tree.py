# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    answer = True
    def isBalanced(self, root: Optional[TreeNode]) -> bool:
        if root is None:
            return self.answer
        self.dfs(root)
        if(self.answer ==False):
            return False
        return True
      

    def dfs(self, node):
        if node is None:
            return 0

        left = self.dfs(node.left) + 1
       
        # print(node.val,left)
        right = self.dfs(node.right) + 1
        print(node.val, left, right)
        if left == False or right ==False:
            self.answer = False
            return False
    
        if abs(left - right) > 1:
            self.answer=False
            return False
       
        return max(left, right)