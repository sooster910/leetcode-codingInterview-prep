"""
1부터 n까지의 수를 stack에 넣었다가 뽑아 늘어놓음 -> 하나의 수열
스택에 push하는 순서는 반드리 오름차순
스택을 이용해 순열을 만들수 있다면 어떤 순서로 push와 pop연산을 수행해야 하는지 

1부터 n 까지의 수를 스택에 넣었다가 뽑아 늘어놓

4 3 6 8 스택에 넣기 

4 3 
push 연산은 + 
pop 연산은 - 
n개의 줄 1이상 n이하 

입력된 수열을 만들기 위해 필요한 연산을 한줄에 한개씩 추력 

4 
1 2 3 4 5 6 7 8 

시간복잡도 : O(n)
"""


import sys

n =int(sys.stdin.readline())

def push(arr, num ):
	 """
    스택에 숫자를 추가하는 함수 (사용되지 않음)
    :param arr: 스택
    :param num: 추가할 숫자
    """

	arr.append(num)
	print("+")

def pop(arr):
	"""
    스택에서 숫자를 제거하는 함수 (사용되지 않음)
    :param arr: 스택
    """
	if len(arr) <=0: 
		return
	arr.pop()
	print("-")

result=[]
stack=[]
tracker =1
possible = True
for _ in range(n):
	num=int(sys.stdin.readline())

	# tracker가 현재 숫자보다 작거나 같은 동안 스택에 숫자 추가
	while tracker <= num : 
		stack.append(tracker)
		result.append("+")
		tracker+=1

	# 스택의 top이 현재 숫자와 같으면 pop
	if stack and stack[-1] == num :
		stack.pop()
		result.append("-")
	else:
		# 스택의 top이 현재 숫자와 다르면 수열 생성 불가능
		print("NO")  
		sys.exit(0) # 프로그램 즉시 종료 , 이 부분 처리를 못해 틀렸었음 

for r in result:
	print(r)
	
		


	# if len(stack)>0 and num == stack[-1] :
	# 	pop(stack)
	# 	continue
	# if len(stack) <1 or stack[-1]<num:
	# 	for i in range(tracker, num+1):
	# 		push(stack,i)
	# 		tracker+=1
	# 	pop(stack)
	# 	continue
	
	# print("NO")
	# break  






