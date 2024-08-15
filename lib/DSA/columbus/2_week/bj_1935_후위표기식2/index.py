"""
후위 표기식과 각 피연산자에 대응하는 값들이 주어졌을 때 그 식을 계산하는 프로그램 만들기 


피연산자의 개수 1<=N<=26 , 	A-Z, 길이는 100이하 

후위 표기식 

피연산자를 만나면 스택에 넣는다.
연산자를 만나면 top과 top-1의 피연산자들끼리 계산한다. (inplace가 지켜져야 함)

틀렸음 
1. 소숫점 둘째 자리까지 출력
2. 후위표기식 계산시 앞에서부터 차례로 계싼해야 한다 342 *+ 이면, 3*4 =12 +2 로 앞에서부터 계산을 지켜야 한다. 

"""


n=int(input())


def calculate(num1, num2, p):
	if p == "+":
		return num1+num2

	if p == "-":
		return num1-num2

	if p =="*":
		return num1*num2

	if p =="/":
		return num2/num1

post=str(input())
nums = []

for _ in range(n):
	nums.append(int(input())) # [A,A,A,B ] 가 되어버린다. 

stack=[]
for p in post : 
	if 65<=ord(p)<=65+27-1:
		stack.append(nums[ord(p)-65]) #[A,A,A,B ] 일 경우 문제가 생긴다. 
	else:

		num1=stack.pop()
		num2=stack.pop()
		stack.append(calculate(num1, num2, p))
print(f"{stack[0]:.2f}")









