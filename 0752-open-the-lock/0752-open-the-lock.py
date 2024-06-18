from collections import deque

class Solution:
    def openLock(self, deadends: List[str], target: str) -> int:
        deadends = set(deadends)
        visited = set()
        queue = deque()
        
        # 초기 상태 설정
        start = "0000"
        if start in deadends:
            return -1
        
        queue.append((start, 0))  # (현재 상태, 회전 횟수)
        visited.add(start)
        
        while queue:
            curr_state, turns = queue.popleft()
            
            if curr_state == target:
                return turns
            
            # 현재 상태에서 인접한 상태 탐색
            for i in range(4):
                curr_digit = int(curr_state[i])
                for d in (-1, 1):
                    next_digit = (curr_digit + d) % 10
                    next_state = curr_state[:i] + str(next_digit) + curr_state[i+1:]
                    
                    if next_state not in visited and next_state not in deadends:
                        queue.append((next_state, turns + 1))
                        visited.add(next_state)
        
        # target 상태에 도달할 수 없는 경우
        return -1