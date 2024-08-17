"""
3986 좋은 단어 

단어위로 아치형 곡선을 그어 같은 글자끼리는 (A는 A끼리, B는 B끼리 )쌍을 짓기로 함 

좋은 단어 : 
만약 선이 교차하지 않으면서 각 글자를 정확히 한개의 다른 위치에 있는 같은 글자와 짝지을

단어의 길이는 2와 100,000

풀이 방법 : 

없거나, -1과 다르면 append
있고, 같으면 pop 

시간복잡도 : O(n)

"""
def is_good_word(s):
	stack=[]
	for char in s: 
		if len(stack)>0 and char ==stack[-1]:  # 스택이 비어있지 않고, 현재 문자가 스택의 top과 같다면
			stack.pop() # 짝을 이루므로 스택에서 제거
		else:
			stack.append(char)  # 짝이 없으므로 스택에 추가
	return len(stack) == 0 # 모든 문자가 처리된 후 스택이 비어있다면 '좋은 단어'

n = int(input())
cnt = 0
for _ in range(n):

	if is_good_word(str(input())):
		cnt+=1

print(cnt)



