from collections import deque
import heapq

def solution(N, road, K):
    graph = [[] for _ in range(N)]
    print(graph)
    #road 결정
    for start, to, dist in road :
        graph[start].append((to, dist))
        graph[to].append((start, dist))

    print(graph)

    #초기화
    distance = [float('inf') for _ in range(N)]
    queue = [(1,0)]
    distance[0] = 0

    while queue :
        node, dist = heapq.heappop(queue)
        if distance[node]<dist:
            continue




    return

from collections import deque
def solution(n, roads, sources, destination):
    answer = []

    # 인접 리스트
    graph = [[] for _ in range(n+1)]

    for start, to in roads:
        graph[start].append(to)
        graph[to].append(start)
    # souces돌면서 bfs 돌기

    for source in sources:
        if(source == destination) :
            answer.append(0)
            continue
        q = deque()
        q.append([source, 0])
        visited = [False] * (n+1)
        isFound = False

        while(q):
            current, dist = q.popleft()

            if(current == destination):
                answer.append(dist)
                isFound= True
                break

            for next in graph[current]:
                if(visited[next] == False):
                    visited[next] = True
                    q.append([next, dist+1])


        if(not isFound):
            answer.append(-1)

    return answer