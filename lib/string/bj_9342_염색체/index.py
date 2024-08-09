"""
염색체
"""

from collections import Counter


n = int(input())
s=[]
required = ["A","B","D","E","F","C"]

def isCon(s):
	if s[0] not in required:
		return False	 
	if ("A" in  s[1:] or "F" in s[1:] or "C" in s[1:] ) and isInRange:
		return Tur

	for key,value in s.items():	
		if( ):
			return False
		
		elif all(char in s for char in required)==False:
			return False
	return True
	


# print(isCon({"B":1}))			
for i in range(n):
	s_list= list(input())
	s_dict = Counter(s_list)
	print("s_dict",s_dict)
	if isCon(s_dict):
		print("Infected!")
	else:
		print("Good")

	


	# s_dict=Counter(map(str, input().split()))
	# print(s_dict)
	
