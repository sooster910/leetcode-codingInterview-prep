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

import sys


def edit_string(initial_string,commands):
	l_stack = 
	return 0


# 입력 처리
initial_string = sys.stdin.readline().strip()
n_commands = int(sys.stdin.readline())
commands = [sys.stdin.readline().strip() for _ in range(n_commands)]

# 결과 출력
result = edit_string(initial_string, commands)
print(result)


