# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
from collections import deque 

    # 각 레벨의 오더 = BFS이용
    # 레벨을 정하는 기준, BFS 에서 deque를 사용하여 bfs에 level을 같이 넣는다. 
    #queue에 넣을 때 [ node ,level] 
    # 어느 시점에 넣을까? queue에서 꺼낼 때
    #인접노드 구할 때, 현재 노드의 level+1로 저장하기 
class Solution(object):
    def levelOrder(self, root):
        """
        :type root: TreeNode
        :rtype: List[List[int]]
        """
        answer = [[] for _ in range(2000)]
        dq = deque()
        level = 0

        if root is None:
            return []

        dq.append((root, level))
        while dq:
            root, lv = dq.popleft()
            if root is not None:
                answer[lv].append(root.val)
                level=max(level,lv)
            if root and root.left is not None:
                dq.append((root.left, lv + 1))
            if root and root.right is not None:
                dq.append((root.right, lv + 1))       
        
        return answer[:level+1]
        