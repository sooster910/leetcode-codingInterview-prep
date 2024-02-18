import heapq


class Solution:
    def findKthLargest(self, nums: List[int], k: int) -> int:
        heap = []
        for num in nums:
            heapq.heappush(heap, -num)
        answer = 0
        while k > 0:
            result = heapq.heappop(heap)
            k -= 1
            answer = result
        return -answer
