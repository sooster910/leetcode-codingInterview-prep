"""
올바른 괄호 문자열 구하기 

vps = (x),() ( 시작했으면 )로 쌍으로 끝나기만 하면 된다. 

시간복잡도: O(n)
"""

def is_vps(parenthesis):
	stack = []
	open = "("
	close =")"
	for p in parenthesis: 
		if p == open: # 여는 괄호는 스택에 추가
			stack.append(p)
		else : # p == close
			if len(stack)>0 and stack[-1]==open: # 스택이 비어있지 않고 top이 여는 괄호라면 pop
				stack.pop()
			else:
				return False    # 스택이 비어있거나 top이 여는 괄호가 아니면 잘못된 VPS
	return len(stack) == 0 


n = int(input())

for _ in range(n):
	if is_vps(str(input())):
		print("YES")
	else:
		print("NO")


