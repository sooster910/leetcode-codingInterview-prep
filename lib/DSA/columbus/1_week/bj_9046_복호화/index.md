## 1. 문제설명


→ 문제 요약(시간이 지나고 봐도 빠르게 파악이 가능하게 간단하게 정리할 것)

주어진 문자열에서 빈도 수 구해서 가장 빈번한 문자 출력, 만약 같은 빈도의 문자가 여러개일 경우 ? 출력

## 2. 접근 방식


→ 생각 과정 자세하게 적기

#### 1. 시간복잡도(있다면 적을 것)


>이 문장의 길이는 적어도 1이상이며 255이하다

빈도 구하기 위해 문자열 순회 O(255)
빈도수 별로 정렬 



#### 2. 올바른 접근 방식 및 해결 방식

1. 문자 빈도 계산 HashMap 이용 
2. 가장 높은 빈도 수 찾기 
3. 순회하면서 가장 높은 빈도 수를 가진 문자 찾기 

## 3. 최종 코드

```python
n = int(input())


def get_freq(s):
	freq= {}
	for char in s:
		freq[char] = freq.get(char,0)+1
	return freq


for _ in range(n):
	s= str(input())
	freq_mapper=get_freq(s.replace(" ","")) # {문자:빈도수 } 해시맵 생성

	max_value=max(freq_mapper.values()) #최대 빈도 찾기
	
	# 최대 빈도수와 같은 빈도수 가진 모든 char 구하기
	freq_list=[key for key,value in freq_mapper.items() if value == max_value]

	answer = freq_list[0] if len(freq_list) ==1 else "?" 
	print(answer)

```
