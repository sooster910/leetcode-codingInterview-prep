#========================================================================
# 문자열 인덱싱 / 슬라이싱
# ========================================================================

s ="안녕하세요"
print(s[1:4]) #"녕하세"
print(s[1:-2]) #녕하  - 는 뒤에서 부터 -1,-2 
print(s[1:]) # 녕하세요 끝은 생략 가능
print(s[:]) #안녕하세요  복사본 리턴
print(s[1:100]) #녕하세요 인덱스가 지나치게 커도 문자열 최대 길이만큼 표현 
print(s[-1]) #요
print(s[-4]) #녕
print(s[:-3]) #안녕
print(s[-3:]) #하세요
print(s[::1]) #안녕하세요 1은 기본값으로 동일 
print(s[::-1]) #reverse
print(s[::2]) #안하요  2칸씩 앞으로이동한다
print(s[::3]) #안세


#========================================================================
# 특정 문자 확인
# ========================================================================

text = "Hello, World!"
char_to_check = 'W'

if char_to_check in text:
    print(f"'{char_to_check}' is in the text.")
else:
    print(f"'{char_to_check}' is not in the text.")

#========================================================================
# 문자열 같은지 비교
# ========================================================================

#--------------#
# == 연산자.     #
#--------------#
string1 = "hello"
string2 = "hello"

if string1 == string2:
    print("The strings are equal.")
else:
    print("The strings are not equal.")


#--------------------------------------- #
# str.startswith() 및 str.endswith()     #
#---------------------------------------#

string = "hello world"

# Check if string starts with "hello"
if string.startswith("hello"):
    print("The string starts with 'hello'.")

# Check if string ends with "world"
if string.endswith("world"):
    print("The string ends with 'world'.")




#========================================================================
# 문자열 길이 반환
# ========================================================================
my_string = "Hello, World!"
len(my_string) 

#========================================================================
# 특정 문자의 인덱스 값 찾기
# ========================================================================

"""
str.find() 또는 str.index() 메서드 사용하기
둘다 모두 제일 처으메 나타나는 위치 반환
find()는 찾는 문자열이 없을 경우 -1을 반환하고, index()는 ValueError를 발생
"""

string = "hello world"
substring = "world"

print(string.find('o')) # 4

try:
    position = string.index(substring) # 6 시작하는 index 리턴
    print(f"The substring '{substring}' is found at position {position}.")
except ValueError:
    print(f"The substring '{substring}' is not found.")


#========================================================================
# 문자열을 구분자 기준으로 나누고 합치기
# ========================================================================

text = "apple,banana,cherry"
delimiter = ","

# 구분자를 기준으로 문자열 나누기
parts = text.split(delimiter)

print(parts)  # 출력: ['apple', 'banana', 'cherry']

# 합치기 
print(''.join(parts)) #applebananacherry
print(','.join(parts)) #apple,banana,cherry
print(" ".join(parts)) #apple banana cherry

#========================================================================
# 문자열 대소문자 변환
# ========================================================================

text = "Hello World"
# 대소문자 서로 뒤바꾸기
swapped_case = text.swapcase() #hELLO wORLD
print(swapped_case) 

upper_case = text.upper()
print(upper_case) #HELLO WORLD

# 모두 소문자로 변환
lower_case = text.lower()
print(lower_case)  # 출력: hello world

# 첫 글자만 대문자로 변환
capitalize = text.capitalize()
print(capitalize)  # 출력: Hello world

# 각 단어의 첫 글자를 대문자로 변환
title_case = text.title()
print(title_case)  # 출력: Hello World


#========================================================================
# 기존 값을 다른 값으로 치환
# ========================================================================
# 기본적인 replace() 메소드 사용
text = "Hello, World!"
new_text = text.replace("World", "Python")
print(new_text)  # 출력: Hello, Python!


# 여러 번 치환하기
text = "Hello, Hello, Hello!"
new_text = text.replace("Hello", "Hi", 2)  # 처음 두 개만 치환
print(new_text)  # 출력: Hi, Hi, Hello!

#========================================================================
# 양쪽 끝에서 특정 문자(혹은 공백) 제거
# ========================================================================

# 양쪽 끝의 공백 제거
text = "   Hello, World!   "
stripped_text = text.strip()
print(stripped_text)  # 출력: "Hello, World!"

# 왼쪽 끝의 공백 제거
left_stripped = text.lstrip()
print(left_stripped)  # 출력: "Hello, World!   "

# 오른쪽 끝의 공백 제거
right_stripped = text.rstrip()
print(right_stripped)  # 출력: "   Hello, World!"

# 양쪽 끝의 특정 문자 제거
text = "...Python..."
stripped_text = text.strip('.')
print(stripped_text)  # 출력: "Python"

# 양쪽 끝의 여러 문자 제거
text = "...Python!!!"
stripped_text = text.strip('.!')
print(stripped_text)  # 출력: "Python"

# 왼쪽 끝의 특정 문자 제거
left_stripped = text.lstrip('.')
print(left_stripped)  # 출력: "Python!!!"

# 오른쪽 끝의 특정 문자 제거
right_stripped = text.rstrip('!')
print(right_stripped)  # 출력: "...Python"

#========================================================================
# 아스키코드로 변환 혹은 대소 비교
# ========================================================================

"""
"A" 65
"a" 97

-------
   32 

"B" 66
"b" 98
"""

# 문자를 아스키코드로 변환
char = 'A'
ascii_code = ord(char)
print(f"'{char}'의 아스키코드: {ascii_code}")  # 출력: 'A'의 아스키코드: 65

# 아스키코드를 문자로 변환
ascii_code = 66
char = chr(ascii_code)
print(f"{ascii_code}의 문자: '{char}'")  # 출력: 66의 문자: 'B'

# 문자열 대소 비교
string1 = "apple"
string2 = "banana"

if string1 < string2:
    print(f"{string1}은 {string2}보다 사전순으로 앞에 있습니다.")
elif string1 > string2:
    print(f"{string1}은 {string2}보다 사전순으로 뒤에 있습니다.")
else:
    print("두 문자열이 같습니다.")

# 아스키코드를 이용한 대소문자 변환
uppercase = 'A'
lowercase = chr(ord(uppercase) + 32) 
print(f"대문자 {uppercase}의 소문자: {lowercase}")  # 출력: 대문자 A의 소문자: a


# 문자열 내의 모든 문자를 아스키코드로 변환
text = "Hello"
ascii_list = [ord(char) for char in text]
print(f"'{text}'의 아스키코드 리스트: {ascii_list}")
# 출력: 'Hello'의 아스키코드 리스트: [72, 101, 108, 108, 111]


