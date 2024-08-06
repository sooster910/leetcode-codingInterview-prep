"""
아스키의 마지막을 반환점에서 다시 출발점부터 시작해야 함.
"""
str = input()


result=""
for char in str:
	if char == " ":
		result+=" "
	else:
		if  ord("A") <=ord(char) <= ord("Z") or ord("a") <=ord(char)<=ord("z"): 
			is_upper = char.isupper()
			base = ord('A') if is_upper else ord('a')
			cipherChar = ((ord(char)-base+13) % 26)  +base
			result+=chr(cipherChar)
		else:
			result+=char

	

print(result)

