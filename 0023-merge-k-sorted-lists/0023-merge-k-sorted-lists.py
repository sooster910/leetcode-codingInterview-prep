# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next

from collections import deque
class Solution:
    def mergeKLists(self, lists: List[Optional[ListNode]]) -> Optional[ListNode]:
        if not lists:
            return None

        # 모든 연결 리스트를 deque에 넣기
        dequeue = deque(lists)

        while len(dequeue) > 1:
            l1 = dequeue.popleft()
            l2 = dequeue.popleft()
            merged = self.twoMergeList(l1, l2)
            dequeue.append(merged)

        return dequeue[0]

        

    def twoMergeList(self, l1, l2):
        result = ListNode()
        current = result

        while l1 and l2:
            if l1.val < l2.val:
                current.next = l1
                l1 = l1.next
            else:
                current.next = l2
                l2 = l2.next

            current = current.next

        current.next = l1 or l2
        return result.next