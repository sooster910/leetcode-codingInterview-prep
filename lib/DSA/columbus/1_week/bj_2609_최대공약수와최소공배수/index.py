"""
최대공약수 최소공배수 
유클리드 호제법 적용 
MOD 연산을 이용해 최대 공약수 

gcd(270, 192)

270 % 192  = 78
      192 % 78 = 36
            78  % 36 = 6
                  36  %  6 = 0  -> 연산의 결과값이 0이 나오면 그 연산의 작은 값

MOD가 0이 나올 때까지 연산 수행. <- base condition
gcd(270,192)=6
    
패턴을 찾을 수 있는데 변수 큰수, 작은수를 매 연산이 수행될 때마다 업데이트 한다. 
재귀형태로 구현이 가능하다. 

"""
answer1 =0 
answer2 =0
num1, num2= map(int, input().split())

def gcd(a,b):

	temp =a%b
	if(temp == 0 ):
		return b
	a = b
	b = temp 
	return gcd(a, b)

answer1=gcd(num1, num2 )
answer2= (num1*num2) / answer1 #큰수를 num1으로

print(int(answer1))
print(int(answer2))
