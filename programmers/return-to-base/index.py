# 풀이 접근
# 양방향이니 dest-> source로 풀면 시간복잡도를 줄일 수 있다.
# O(V+E) 로 풀수 있다.

from collections import deque

def solution(n, roads, sources, destination):
    # 인접 리스트
    graph = [[] for _ in range(n+1)]

    for start, to in roads:
        graph[start].append(to)
        graph[to].append(start)

    dist = [-1] * (n + 1)
    dist[destination] = 0

    # BFS를 사용하여 목적지에서 모든 노드까지의 최단 거리를 구함
    q = deque([destination])
    while q:
        current = q.popleft()
        for next in graph[current]:
            if dist[next] == -1:
                dist[next] = dist[current] + 1
                q.append(next)

    # 각 소스에서 목적지까지의 최단 거리
    answer = [dist[source] for source in sources]

    return answer


