## 1. 문제설명


→ 문제 요약(시간이 지나고 봐도 빠르게 파악이 가능하게 간단하게 정리할 것)

유클리드 알고리즘 이용해 최대 공약수와 최소 공배수 

## 2. 접근 방식

→ 생각 과정 자세하게 적기

#### 1. 시간복잡도(있다면 적을 것)

O(log(min(a,b)))

#### 2. 올바른 접근 방식 및 해결 방식


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

>최소 공배수 : A*B/gcd(A,B)
>


## 3. 최종 코드

```python

answer1 =0 
answer2 =0
num1, num2= map(int, input().split())

def gcd(a,b):

    temp =a%b
    if(temp == 0 ): #0 이면  작은수 리
        return b
    a = b
    b = temp 
    return gcd(a, b)

answer1=gcd(num1, num2 )
answer2= (num1*num2) / answer1 #큰수를 num1으로

print(int(answer1))
print(int(answer2))

```
