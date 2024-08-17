"""
후위 표기식과 각 피연산자에 대응하는 값들이 주어졌을 때 그 식을 계산하는 프로그램 만들기 


피연산자의 개수 1<=N<=26 , 	A-Z, 길이는 100이하 

후위 표기식 

피연산자를 만나면 스택에 넣는다.
연산자를 만나면 top과 top-1의 피연산자들끼리 계산한다. (inplace가 지켜져야 함)

틀렸음 
1. 소숫점 둘째 자리까지 출력
2. 후위표기식 계산시 앞에서부터 차례로 계싼해야 한다 342 *+ 이면, 3*4 =12 +2 로 앞에서부터 계산을 지켜야 한다. 


반례생각하기 : [A,A,A,B ] 

시간복잡도 : O(n)
"""


n=int(input())


def calculate(num1, num2, p):
	if p == "+":
		return num1+num2

	if p == "-":
		return num1-num2 #뺄셈시 순서 중요

	if p =="*":
		return num1*num2

	if p =="/":
		return num2/num1 #나눗셈 순서 중요 

post=str(input())
nums = []

for _ in range(n):
	nums.append(int(input())) # [A,A,A,B ] 가 되어버린다. 

stack=[]
for p in post : 
	if 65<=ord(p)<=65+27-1: # ASCII 코드로 'A'부터 'Z'까지 확인
		stack.append(nums[ord(p)-65]) # 피연산자일 경우, 해당값 스택에 추가 ord(p) - 65는 'A'를 0, 'B'를 1 등으로 매핑함
	else:
		# 연산자일 경우, 스택에서 두 개의 숫자를 꺼내어 계산
		num1=stack.pop() # 나중에 들어간 숫자
		num2=stack.pop() # 먼저 들어간 숫자
		stack.append(calculate(num1, num2, p))
print(f"{stack[0]:.2f}") #최종 결과 출력 (소수점 둘째 자리까지)









