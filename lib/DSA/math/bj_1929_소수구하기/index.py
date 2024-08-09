"""
(1 ≤ M ≤ N ≤ 1,000,000) M이상 N이하의 소수가 하나 이상 있는 입력만 주어진다.

한 줄에 하나씩, 증가하는 순서대로 소수를 출력한다.
3 16 -> 3, 5, 7, 11, 13


"""


# arr = [ i for i in range(n, m+1)]
# isPrime = [False for i in range(0, len(arr))]
# print("arr",arr)
# for i in range(0, len(arr)):
# 	if (isPrime[i] ):
# 			continue
# 	else:
# 		for j in range(i+1, len(arr)):
# 			print(arr[j], arr[i])
# 			if not isPrime[j] and  arr[j]%arr[i] ==0:
# 				isPrime[j] = True

# for i in range(0, len(isPrime)):
# 	if isPrime[i]==True:
# 		print( arr[i])

n,m = map(int, input().split())

is_prime = [True] * (m + 1)
is_prime[0] = is_prime[1] = False


for i in range(2, int(m**0.5) + 1):
    if is_prime[i]:

        # i의 배수들을 모두 소수가 아닌 것으로 표시
        for j in range(i*i, m+1, i):
        	is_prime[j]=False

for i in range(n, m+1):
	if( is_prime[i]):
		print(i)

     



