from collections import Counter

class Solution:
    def leastInterval(self, tasks: List[str], n: int) -> int:
        # task 빈도 계산
        task_freq = Counter(tasks)

        # 빈도 수 기반으로 높은작업이 우선순위가 높게
        max_heap = []
        for cnt in task_freq.values():
            max_heap.append(-cnt)
        
        heapq.heapify(max_heap)
        cycles=0
        queue =[]
        # 작업스케쥴링 - 사이클마다 가장 빈도수가 높은 작업 선택-> 빈도줄이기-> 
        # 냉각시간이 필요하면 큐에 넣기
        while max_heap or queue:
            cycles+=1

            if max_heap:

                count = heapq.heappop(max_heap)
                count+=1

                if(count !=0):
                    queue.append([count, cycles+n])
            if queue and queue[0][1] == cycles:
                heapq.heappush(max_heap, queue.pop(0)[0])

        return cycles