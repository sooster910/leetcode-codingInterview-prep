# A,B,C = map(int, input().split())

# print(A,B,C)

# ret = 1
# exponent =B 
# base = A
# while( exponent>0 ):
#     #exponent가 홀수인경우
#     if ( exponent %2 ==1):
#         ret = (base*ret)%C

#     base = (base*base)%C
#     exponent = exponent//2
  
# print(ret)


"""
평문의 알팜벳을 암호문의 알파벳으로 대치시켜 치환시키는것 
암호문 알파벳의 빈도수를 체크하고 가장 빈번하게 나타나는 문자를 출력하는 프로그램을 작성 하시오 

1. 빈도수 체크 
2. 가장 빈번하게 나타나는 문자 출력  - 여러개일 경우 ? 출력

만약 주어진 암호문에서 가장 빈번하게 나타나느 문자가 여러개일 경우, 그 빈번한 문자중 어느것이 평문 알파벳 'e'를 가리키는지 확실하게 
알수없기 때문에 모르겠음을 의미하는 ? 를 출력하면된다.
asvdge ef ofmdofn
"""
# from collections import Counter

# n= int(input())

# def countFreq(cipher):
#     countFreqDict={}
#     for char in cipher:
        
#         if char in countFreqDict:
#             countFreqDict[char]+=1
#         else:
#             countFreqDict[char] =1

#     return countFreqDict

# def get_max_strs(countFreqDict):
#     most_freq_strs= ""
#     most_freq_cnt=0
#     for key in countFreqDict:
#         if(countFreqDict[key]> most_freq_cnt):
#             most_freq_cnt=countFreqDict[key]
#             most_freq_strs=key
#         elif countFreqDict[key] == most_freq_cnt:
#             most_freq_strs+=key
#     return most_freq_strs

# for _ in range(0,n):
#     cipher=str(input())
#     char_counts = Counter(cipher)
#     max_count = max(char_counts.values())
#     max_chars = get_max_strs(char_counts)

#     if(len(max_chars)>=2):
#         print("?")
#     else:
#         print(max_chars[0])
# 5* 15
# answer=[  [] for _ in range(15)]
# for _ in range(0, 5):

#    row_str = str(input())
#    for i in range(len(row_str)):
#         answer[i].append(row_str[i])

# result=""
# for row in answer:
#     result+="".join(row)

#가장 많이 사용딘 알파벳 중 대문자 출력

# from collections import Counter

# word = str(input())

# max_freq_char = Counter(word.lower())

# max_char=""
# max_freq=0

# for char in max_freq_char:
   
#     if(max_freq_char[char] > max_freq):
#         max_char=char
#         max_freq=max_freq_char[char]
#     elif (max_freq_char[char] == max_freq):
#         max_char="?"
#         break

# print(max_char.upper())



# iterate = int(input())
# pattern = str(input())

# def checkIfCorrectPattern(word):
#     pre,post=pattern.split("*")
#     #a를 기점으로 찾는다. pre를 먼저 찾는다. 인덱스를 알아낸다.
#     idx = pattern.index("*")

#     return word.startswith(pre) and word.endswith(post) and len(pre) +len(post) <= len(word)
#     # if (word[:idx] == pattern_list[0]):        
#     #     new_word=word[idx+1:] 
#     #     if(new_word[-len(pattern_list[1]):]== pattern_list[1]):
#     #         return True
#     # else:
#     #     return False
  


# for _ in range(0, iterate):
#     if checkIfCorrectPattern(str(input()))  :
#         print("DA")
#     else:
#         print("NE")

sentence = str(input())

answer =""
isOpen=False
reverse_q = ""
for s in sentence :
		
	if s == " ": # 빈문자열이면 
		print("빈문자열")
		if isOpen: 
			answer+=s
	
		else:
			# 괄호내에있지 않다면 문자이다.끊어주고 answer에 합쳐준다. 
			answer=answer + " " +reverse_q 
			reverse_q = ""

	elif 97<=ord(s) <=97+26-1:
		if isOpen:
			answer+=s

		else: 
			reverse_q = s+reverse_q

	elif s =="<":
		if isOpen:
			print("왜 열려있어?")
		else: 
			isOpen= True

			if len(reverse_q)>0 :
				answer=answer + " " +reverse_q 
				reverse_q = ""

			answer+=s
				


	elif s ==">":
		if isOpen:

			answer+=s
			isOpen=False

		else: 
			print("열리지도 않았는데 왜 닫힘?")

	elif type(s) is int:
		print("int",s)
		if isOpen:
			answer+=s

		else: 
			reverse_q = s+reverse_q

	else:
		answer+=s
print(answer)
