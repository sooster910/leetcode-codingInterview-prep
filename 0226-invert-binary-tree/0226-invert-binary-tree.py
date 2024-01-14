# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution(object):
    def invertTree(self, root):
        """
        :type root: TreeNode
        :rtype: TreeNode
        """
        self.invertOrder(root)
        return root

    def invertOrder(self,root):
        if not root:
            return

        self.invertOrder(root.left)
        self.invertOrder(root.right)
        self.swap(root)

    def swap(self,root):
        if not root:
            return
        temp = root.left
        root.left = root.right
        root.right = temp
        