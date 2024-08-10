variable=str(input())
answer=""
if "_" in variable :
	#자바로 변환
	arr= variable.split("_")
	for i in range(0, len(arr)):
		if i >=1:
			answer+= arr[i].title()
		else: 
			answer+=arr[i]

else:
	#c++ 변환
	# 자바조건 
	# 첫 단어는 소문자, 다음 단어는 첫문자만 대문자, 공백이 없다. 
	if " " in variable:
		print("Error")
	elif 97<=ord(variable[0])  <=97+26-1:
		print("Error")
	elif varaible.swapcase() == variable.lower():
		print("Error")
	
	for v in variable:
		#대문자일경우, 기존 answer+_
		if( 65<= ord(v)<=65+26-1 ):
			answer=answer+"_"+ v.lower()
		else:
			answer+=v

print(answer)
