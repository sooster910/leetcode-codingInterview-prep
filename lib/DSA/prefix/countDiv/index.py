"""
that, given three integers A, B and K, returns the number of integers within the range [A..B] that are divisible by K, i.e.:

{ i : A ≤ i ≤ B, i mod K = 0 }

For example, for A = 6, B = 11 and K = 2, your function should return 3, because there are three numbers divisible by 2 within the range [6..11], namely 6, 8 and 10.

Write an efficient algorithm for the following assumptions:

A and B are integers within the range [0..2,000,000,000];
K is an integer within the range [1..2,000,000,000];
A ≤ B.

 특정 구간 내 K가 나누는게 가능한 숫자들(배수)의 개수를 센다 
 그런데 중요한건 O(1) 으로 해결 해야 한다.
 
"""


A,B,K = map(int, input().split())

# 처음부터 B구간 까지의 K배수 개수 구하기 
cnt_b_section = B // K

# 처음부터 A구간 까지의 K배수 개수 구하기 
cnt_a_section = A//K 

# 만약 K배수로 나누어 떨어지면 +1 더하ㅣㄱ 
if A%K ==0 :
	cnt_b_section+=1

print(cnt_b_section- cnt_a_section)