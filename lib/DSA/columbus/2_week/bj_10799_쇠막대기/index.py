"""
레이저는 여는 괄호와 닫는 괄호의 인접한 쌍으로 표현 
또한 모든 () 는 반드시 ㄹㅔ이저를 표현한다.


레이저인 경우 r로 변경한다.

) 
"""



# parenthesis=str(input())
# open="("
# close=")"
# razor = "r"

# stack=[]
# cnt_r = 0
# for i in range (len(parenthesis)):
# 	if parenthesis[i] == open:
# 		stack.append(parenthesis[i]) 
# 	else :
# 		if parenthesis[i-1]==close:
# 			#레이저 
# 			stack[-1] = razor
# 		else if razor in parenthesis:
# 			#레이저가 있고 닫힌괄호라면
# 			#레이저 개수 세고 


from collections import deque


linked_list =deque()
linked_list.append(3) #append
# del linked_list[0] # O(n)
linked_list.remove(3). 

linked_list.appendleft() #prepend

linked_list.popleft() # delete_first
linked_list.pop() # delete_last
print(linked_list) # display