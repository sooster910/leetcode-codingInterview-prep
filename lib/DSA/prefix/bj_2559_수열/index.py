"""
매일 아침 9 시에 학교에서 측정한 온도가 어떤 정수의 수열로 주어졌을 경우, 
연속적인 며칠 동안의 온도의 합이 가장 큰 값을 알아보고자 한다.

예를 들어 10일간의 온도가 주어졌을 경우, 

3 -2 -4 -9 0 3 7 13 8 -3

이틀간의 온도 합은  
3+-2 
-2+-4
.
.

max = 21

다른 예로 연속적인 5일 간의 온도의 합은 

3 -2 -4 -9 0 3 7 13 8 -3

arr[0-4]
arr[1-5]
.
.
max =31 

매일 측정한 온도가 정수의 수열로 주어졌을 때, 연속적인 며칠 동안의 온도의 합이 가장 큰 값을 게산

입력되는 온도의 수열에서 연속적인 K일의 온도의 합이 최대가 되는 값을 출력한다.
N 날짜수 ,K 연속적인 날짜 
2<=N<= 100,000 
"""

# 연속적 누적합 사용 

a,b =  map(int,input().split())
arr = list(map(int, input().split()))

prefix = [0 for _ in range(a+1)]
answer = float("-inf")  # 이 부분 조심하기 ! 
for i in range(a):
	prefix[i+1] = prefix[i] + arr[i]


#누적합을 구한후 구간 k부터 관찰한다. 
for k in range(b, a+1):
	temp_sum = prefix[k] - prefix[k-b]
	if temp_sum > answer:
		answer = temp_sum


print(answer)

