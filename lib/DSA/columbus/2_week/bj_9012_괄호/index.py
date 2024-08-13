"""
올바른 괄호 문자열 구하기 

vps = (x),() ( 시작했으면 )로 쌍으로 끝나기만 하면 된다. 

"""

def is_vps(parenthesis):
	stack = []
	open = "("
	close =")"
	for p in parenthesis:
		if p == open:
			stack.append(p)
		else :
			if len(stack)>0 and stack[-1]==open:
				stack.pop()
			else:
				return False
	return len(stack) == 0 


n = int(input())

for _ in range(n):
	if is_vps(str(input())):
		print("YES")
	else:
		print("NO")


