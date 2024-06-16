class Solution:
    def closestCost(self, baseCosts: List[int], toppingCosts: List[int], target: int) -> int:
    
        closest = float('inf')
        
        def dfs(current_cost, index):
            nonlocal closest
            # 현재 상태의 비용이 목표와 더 가까운지 확인하고, 더 가깝다면 갱신
            if abs(current_cost - target) < abs(closest - target) or (abs(current_cost - target) == abs(closest - target) and current_cost < closest):
                closest = current_cost
            
            # 모든 토핑을 다 사용했으면 종료
            if index == len(toppingCosts):
                return
            
            # 현재 토핑을 0번, 1번, 2번 사용한 경우를 각각 시도
            dfs(current_cost, index + 1)  # 0번 사용
            dfs(current_cost + toppingCosts[index], index + 1)  # 1번 사용
            dfs(current_cost + 2 * toppingCosts[index], index + 1)  # 2번 사용
        
        # 모든 베이스에 대해 DFS 탐색을 시작
        for base in baseCosts:
            dfs(base, 0)
        
        return closest
