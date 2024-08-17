"""
에디터
https://www.youtube.com/watch?v=3yiOZjNh7yc&ab_channel=%EA%B0%9C%EB%B0%9C%EC%9E%90%EA%B0%95%EB%AF%BC%EC%B2%A0

L	커서를 왼쪽으로 한 칸 옮김 (커서가 문장의 맨 앞이면 무시됨)
D	커서를 오른쪽으로 한 칸 옮김 (커서가 문장의 맨 뒤이면 무시됨)
B	커서 왼쪽에 있는 문자를 삭제함 (커서가 문장의 맨 앞이면 무시됨)
삭제로 인해 커서는 한 칸 왼쪽으로 이동한 것처럼 나타나지만, 실제로 커서의 오른쪽에 있던 문자는 그대로임
P $	$라는 문자를 커서 왼쪽에 추가함

 문제를 못푼 이유 : 주어진 대로 구현 했는데..의도한 결과가 나오지 않음 

 효율적인 방법은 두개의 스택을 이용해 abcd| 이렇게 커서가 맨 오른쪽에 있음을 보장하는 stack을 사용한다.
 그래서 right stack은 항상 커서가 가장 stack의 top을 보장하는 것이다. 

시간복잡도 :  O(n)
"""
import sys

def edit_string(initial_string, commands):
    right_stack = list(initial_string)  # 초기 문자열을 오른쪽 스택에 넣음
    left_stack = []  # 왼쪽 스택은 비어있음

    for cmd in commands:
        if cmd[0] == 'L' and right_stack: 
            left_stack.append(right_stack.pop())# 커서를 왼쪽으로 이동: 오른쪽 스택의 top을 왼쪽 스택으로 이동
        elif cmd[0] == 'D' and left_stack:
            right_stack.append(left_stack.pop()) #커서를 오른쪽으로 이동: 왼쪽 스택의 top을 오른쪽 스택으로 이동
        elif cmd[0] == 'B' and right_stack:
            right_stack.pop() #커서 왼쪽의 문자 삭제: 오른쪽 스택의 top을 제거, top이 현재 커서의 왼쪽이므로
        elif cmd[0] == 'P':
            right_stack.append(cmd[2]) #커서 왼쪽에 문자 추가: 새 문자를 오른쪽 스택에 추가

    return ''.join(right_stack + left_stack[::-1]) #오른쪽 스택의 모든 문자와 왼쪽 스택을 뒤집은 문자들을 합침

# 입력 처리
initial_string = sys.stdin.readline().strip()
n_commands = int(sys.stdin.readline())
commands = [sys.stdin.readline().strip() for _ in range(n_commands)]

# 결과 출력
result = edit_string(initial_string, commands)
print(result)













"""
이전 풀이 
"""
# s = str(input())

# m = int(input())

# print("aa", ''.join(["x"]+["a","b","c","d","y"][::-1]))
# cursor = len(s)
# for _ in range(m):
# 	command=input().split()
	
# 	print(command,s, cursor)
# 	if command[0] == "P":
# 		s = s[0:cursor] + command[1]+ s[cursor:]
# 		if cursor ==0:
# 			cursor = max(cursor-1,0)
# 		else: 
# 			cursor = min(cursor+1, len(s))
# 	elif command[0] == "L":
# 		cursor = max(0, cursor-1)
# 		print("L")
# 	elif command[0] =="D":
# 		cursor = min(cursor+1, len(s))
# 	elif command[0] == "B":
# 		target_index = max(0,cursor-1)
# 		#target_index가 0일경우는 더 이상 지울게 없다.
# 		if(target_index != 0):	 # target_index가 0 이 아닐 경우에만 
# 			s=s[0:target_index] + s[target_index+1:]
# 			cursor= max(0,cursor-1)


# print("answer",s)



