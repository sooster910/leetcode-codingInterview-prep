"""
잘못된 수를 부를 때마다 0을 외친다.
가장최근데 재민이가 쓴수를 지우기ㅔ 시킨다.
재민이는 이렇게 모든 수를 적은 후 그 수의 합을 알고 싶어한다. 재민이를 도와주자 

0 인수는 지우게 한다.

K 개 줄
"""

parenthesis = str(input())

trace = [0,0] #0 =[],1=()
stack=[]

for p in parenthesis:


	if p == "(":
		stack.append(p)
			

	elif p ==")":
		if len(stack)>=1 and stack[-1] != "(":
			print(0)
			exit()
		elif len(stack)>=1 and stack[-1] =="(":
			stack.pop()
			trace[1]+=1
			if(len(stack) == 0 ): #stack이 비었을 경우 
				trace=[] #비워주기 

	elif p =="[":
	elif p =="]":
		if len(stack)>=1 and stack[-1]!="]":
			print(0)
			exit()

