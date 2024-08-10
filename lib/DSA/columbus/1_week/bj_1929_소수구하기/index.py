n,m = map(int, input().split())

is_prime = [True] * (m + 1)  #0부터 m까지 프라임인지 구함(0부터 m까지의 모든 수를 일단 소수로 가정 (True로 표시))

is_prime[0] = is_prime[1] = False # 0이랑, 1은 소수가 아님 


for i in range(2, int(m**0.5) + 1): #2부터 m의 제곱근까지 반복
    if is_prime[i]: # i가 소수라면 
        # i의 배수들을 모두 소수가 아닌 것으로 표시
        for j in range(i*i, m+1, i):  #초기 시작은 i*i , i배수 만큼 증가, 
            is_prime[j]=False

for i in range(n, m+1):
    if( is_prime[i]):
        print(i)
