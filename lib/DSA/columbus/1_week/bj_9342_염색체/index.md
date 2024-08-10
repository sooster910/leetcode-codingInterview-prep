## 1. 문제설명

---

→ 문제 요약(시간이 지나고 봐도 빠르게 파악이 가능하게 간단하게 정리할 것)

주어진  두 수 사이의 소수구하기

## 2. 접근 방식

---

→ 생각 과정 자세하게 적기

### 1. 시간복잡도(있다면 적을 것)

>(1 ≤ M ≤ N ≤ 1,000,000) 
>

### 2. 문제 조건 분석 과정
소수 구하기 -> 1과 자기 자신만 나누어 떨어지는 수 중에 1보다 큰 수를 말한다. 2가 가장 작은 소수가 된다.

### 3. 최종 선택한 자료구조/알고리즘 혹은 풀이 방법


*위 3가지는 가이드라인일 뿐, 본인이 생각한 과정을 적으면 됨.

## 3. 틀린 이유 설명

- 첫번째 풀 때는 다음 이라는 문제 설명이 연속된 차례라고 인지못함 (문제 인지 부주의)

- 두번째 풀 때 주어진 조건들을 하나하나 만족시키는 코드를 작성하기엔 구현 처리가 까다로움 

- 세번째 풀 때 문제를 조건을 이해하고 통합적으로 처리함
- 결국 AFC가 무조건 연속적으로 연달아 나와야 하고 문장 AFC를 기준으로 _AFC_ 이런 형태가 되어야 함.
- AFC를 기준으로 pre, post 는 문자가 있어도 되고 없어도 되며, 있을 경우엔 무조건 1개 문자여야하고 ["A","B","D","E","F","C"] 중에 하나여야 한다.

- 이걸 구현하는 과정에서 파이썬 문법이 익숙치 않다 보니 헤매게 되고 split을 사용했을 때 전후 값이 나오는데, 문제는 AFCAFC 가 될 경우 처리가 어렵게 된다.

- 그래서 split이 아닌 다른 메서드를 사용해 pre, post를 정확히 얻어 내야 한다. 
- 혹은 다른 방식으로 가능할지도.

```python

from collections import Counter


n = int(input())
s=[]
required = ["A","B","D","E","F","C"]

def isCon(s_pressed): 
	if( "AFC" in s_pressed  ):
		s_splitted= s_pressed.split("AFC") # 

		if len(s_splitted[0])==1 and s_splitted[0] in required:
			return True
		if len(s_splitted[1])==1 and s_splitted[0] in required:
			return True
	return False
	
def press(s):
	if not s:
		return ""
	result =s[0]
	for char in s[1:]:
		if char != result[-1]:
			result += char
	return result



for i in range(n):
	s_list= list(input())
	if len(s_list) < 3:
		continue

	s_pressed= press(s_list)
	if isCon(s_dict, s_pressed):
		print("Infected!")
	else:
		print("Good")


```



→ 어디서 막혔는지 왜 막혔는지 자세하게 기술

## 4. 올바른 접근 방식 및 해결 방식

제곱근까지만 계산함으로써 최적화 할 수 있다.

---

#### 1. 정규식 이용

```python

import re
pattern = r'^[ABCDEF]?A+F+C+[ABCDEF]?$'
if re.match(pattern, string):
    print("Match")

```

- 정규표현식 패턴: 
- ^ : 문자열 시작
- [ABCDEF]? : ABCDEF 중 하나가 있거나 없음
- A+ : A가 하나 이상
- F+ : F가 하나 이상
- C+ : C가 하나 이상
- [ABCDEF]? : ABCDEF 중 하나가 있거나 없음
- $ : 문자열 끝



#### 2. 슬라이싱 이용

```python

n = int(input())
s=[]
required = ["A","B","D","E","F","C"]

def isCon(s_pressed):

	start = s_pressed.find('AFC')
	pre = s_pressed[:start]
	post = s_pressed[start+3:]

	if(pre != ""):
		if(len(pre)== 1 and pre in required):
			return True
		else:
			return False
	if(post !=""):
		if(len(post)==1 and post in required):
			return True
		else:
			return False

	return True

```

## 5. 최종 코드

#### 1. 정규식

```python

import re
from collections import Counter


n = int(input())
s=[]
required = ["A","B","D","E","F","C"]

def isCon(s_pressed):
	
    # 정규 표현식 패턴
    pattern = r'^[ABCDEF]?A+F+C+[ABCDEF]?$'
    
    return bool(re.match(pattern, s_pressed))
	
def press(s):
	if not s:
		return ""
	result =s[0]
	for char in s[1:]:
		if char != result[-1]:
			result += char
	return result



for i in range(n):
	s_list= list(input())
	if len(s_list) < 3:
		continue

	s_dict = Counter(s_list)
	s_pressed= press(s_list)
	if isCon(s_pressed):
		print("Infected!")
	else:
		print("Good")


```



#### 2. 슬라이싱

```python

n = int(input())  # 테스트 케이스의 수 입력
s = []  # 사용되지 않는 빈 리스트
required = ["A","B","D","E","F","C"]  # 허용되는 문자 리스트

def isCon(s_pressed):
    start = s_pressed.find('AFC')  # 'AFC' 문자열의 시작 위치 찾기
    pre = s_pressed[:start]  # 'AFC' 이전 부분 추출
    post = s_pressed[start+3:]  # 'AFC' 이후 부분 추출
    
    if(pre != ""):  # 'AFC' 이전에 문자가 있는 경우
        if(len(pre) == 1 and pre in required):  # 이전 문자가 하나이고 허용된 문자인 경우
            return True
        else:  # 그 외의 경우
            return False
    
    if(post != ""):  # 'AFC' 이후에 문자가 있는 경우
        if(len(post) == 1 and post in required):  # 이후 문자가 하나이고 허용된 문자인 경우
            return True
        else:  # 그 외의 경우
            return False
    
    return True  # 'AFC'만 있는 경우

def press(s):
    if not s:  # 빈 문자열인 경우
        return ""
    result = s[0]  # 결과 문자열의 첫 문자 초기화
    for char in s[1:]:  # 두 번째 문자부터 순회
        if char != result[-1]:  # 현재 문자가 이전 문자와 다른 경우
            result += char  # 결과 문자열에 추가
    return result  # 압축된 문자열 반환

for i in range(n):  # 테스트 케이스 수만큼 반복
    s_list = list(input())  # 입력 문자열을 리스트로 변환
    if len(s_list) < 3:  # 문자열 길이가 3 미만인 경우
        continue  # 다음 테스트 케이스로 넘어감
    s_pressed = press(s_list)  # 문자열 압축
    if isCon(s_pressed):  # 압축된 문자열이 조건을 만족하는지 확인
        print("Infected!")  # 조건 만족 시 "Infected!" 출력
    else:  # 조건을 만족하지 않는 경우
        print("Good")  # "Good" 출력


```