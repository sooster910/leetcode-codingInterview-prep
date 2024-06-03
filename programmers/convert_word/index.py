# 단어변환 프로그래머스
# 두 개의 단어 begin, target과 단어의 집합 words가 있습니다. 아래와 같은 규칙을 이용하여 begin에서 target으로 변환하는 가장 짧은 변환 과정을 찾으려고 합니다.

#1. 한 번에 한 개의 알파벳만 바꿀 수 있습니다.
#2. words에 있는 단어로만 변환할 수 있습니다.

#예를 들어 begin이 "hit", target가 "cog", words가 ["hot","dot","dog","lot","log","cog"]라면 "hit" -> "hot" -> "dot" -> "dog" -> "cog"와 같이 4단계를 거쳐 변환할 수 있습니다.


from collections import deque

def solution(begin, target, words):
    answer = 0
    q = deque([(-1,0)])
    visited = set()
    visited.add(begin)

    # 한개의 알파벳만 다른지 판단하는 함수
    def is_changeable(str1, str2):
        diff_cnt = 0
        for i in range(0, len(str1)):
            if str1[i] !=str2[i]:
                diff_cnt+=1

        return diff_cnt == 1

    while(q):
        idx,depth = q.popleft()
        if(idx ==-1):
            for i in range(0, len(words)):
                if(is_changeable(words[i], begin)):
                    q.append((i, depth+1))
            continue

        if(words[idx] == target):
            return depth

        for i in range(0, len(words)):
            if(is_changeable(words[i], words[idx] ) and words[i] not in visited):
                visited.add(words[i])
                q.append((i, depth+1))
    return 0


