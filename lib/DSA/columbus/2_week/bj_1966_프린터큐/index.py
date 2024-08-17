"""
현재 queue. 의 가장 앞에 있는 문서의 중요도를 확인한다.

나머지 문서들 중 현재 문서보다 중요도가 더 좊은 문서가 하나라도 있따면, 큐에 넣는다. 그렇지 않다면 바로 인쇄한다.

queue에 있는 문서수와 중요도가 주어졌을 때
테스트 케이스의 첫번째 줄에는 문서의 개수 

1 0 
1문서의개수
0 몇번째로 인쇄되었는지 궁금한 문서가 현재 qeueu에서  몇번째로 놓여있는지 나타내는 정수 맨 왼쪽은 0


print = [1]

문서가 제거 될 때 마다 max_num 이 갱신되어야 한다. 
"""

from collections import deque
tc = int(input())


def printQ(n,m,docs):
	"""
    프린터 큐 문제를 해결하는 함수
    :param n: 문서의 개수
    :param m: 궁금한 문서의 위치
    :param docs: 각 문서의 중요도 리스트
    :return: 궁금한 문서가 인쇄되는 순서
    """
     # 문서가 하나뿐이면 무조건 첫 번째로 인쇄됨
	if( int(n) == 1):
		return 1

	# 문서의 인덱스와 중요도를 함께 저장하는 큐 생성
	q = deque()
	for i,d in enumerate(docs):
		q.append([i,d])
	max_num = max(docs)    # 현재 큐에서 가장 높은 중요도 저장
	cnt = 0 # 인쇄된 문서 수 카운트
	
	while q:
		if int(q[0][1]) ==int(max_num):  # 큐의 첫 번째 문서의 중요도가 최대값과 같은 경우
			if q[0][0] == int(m):#그리고 인쇄할 문서가 target문서(문제에서 말하는 궁금한 문서인 경우)
				cnt+=1
				return cnt
			else : # target문서가 아닌경우 
				q.popleft()   # 문서 인쇄 (큐에서 제거)
				max_num =  max([item[1] for item in q])  # 남은 문서 중 최대 중요도 갱신
				cnt+=1 # 인쇄한 문서 수 증가
		else: 
			# 중요도가 낮으면 문서를 큐의 뒤로 이동
			q.append(q.popleft())
		
	return cnt

	


for _ in range(tc):
	n,m = input().split() 
	docs = list(map(int, (input().split())))


	print(printQ(n,m,docs))