"""
정수를 저장하는 큐 구현 후 

"""

from collections import deque
import sys
n =int(sys.stdin.readline())
q = deque()
for _ in range(n):
	command = sys.stdin.readline().split()
	s = command[0]
   
	if( "push" in s):
		q.append(command[1])
	elif "pop" in s:
		if len(q)>0:

			print(q.popleft())
		else:
			print(-1)
	elif "size" in s: 
		print(len(q))
		
	elif "front" in s: 
		if len(q)>0: #실수줄이기 s비교 아니 q
			print(q[0])
		else:
			print(-1)

	elif "empty" in s: 
		if len(q)>0 : 
			print(0)
		else : 
			print(1)

	elif "back" in s:
		if(len(q))>0:
			print(q[-1])
		else:
			print(-1)