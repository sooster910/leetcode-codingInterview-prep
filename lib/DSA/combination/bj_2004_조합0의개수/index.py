"""
n m 의 조합 에서 끝자리 0의개수를 출력하는 프로그램작성

25 12 의 combination => 25 C 12 

nPr! / r!

(n ! / n-r+1!  )/r!


"""
import math

n,m = map(int,input().split())

result = math.factorial(n)/(math.factorial(n-m)*math.factorial(m))

# result = math.comb()
print(result)
