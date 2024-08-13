cnt = 0
def solution(n):
    global cnt
    cnt = 0
    isVisited_col = [-1 for _ in range(n)]  # i번째 행의 퀸이 위치한 열

    def isValidToPutQueen(level, col):
        for prev_level in range(level):
            # 같은 열이나 대각선에 다른 퀸이 있는지 확인
            if isVisited_col[prev_level] == col or 
               level - prev_level == abs(col - isVisited_col[prev_level]):
                return False
        return True

    def recursiveNQueen(level):
        global cnt
        if level == n:
            cnt += 1  # 유효한 배치를 찾음
            return
        
        for col in range(n):
            if isValidToPutQueen(level, col):
                isVisited_col[level] = col
                recursiveNQueen(level + 1)
                isVisited_col[level] = -1  # 백트래킹

    recursiveNQueen(0)
    return cnt
