# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def maxDepth(self, root: Optional[TreeNode]) -> int:
        answer = 0
        maxLeft = 0
        answer = self.dfs(root, 0)

        return answer

    def dfs(self, node, level):
        if node is None:
            return level
        level += 1

        maxL = self.dfs(node.left, level)
        maxR = self.dfs(node.right, level)

        maxDepth = max(maxL, maxR)

        return maxDepth
