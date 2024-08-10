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



