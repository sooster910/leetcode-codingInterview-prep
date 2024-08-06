"""
문제에서 요구하는 것 :  주어진 알파벳순서를 배치해 펠린드롬 만들기
정답이 여러개일 경우 사전순으로 앞서는 것 출력


"""

# 알파벳을 배치하기 위해 카운터 필요 
cnt = {}
str = input()
for char in str:
	cnt[char] = cnt.get(char, 0)+1

# A를 단어의 가장 바깥쪽에 와야 하므로 이어 붙일 때 Z부터 시작하는게 좋다.
# 예)   Z -> YZY ->AYZYA  
ret =""
for i in range(ord("Z"), ord("A")-1,-1):
	#cnt에 해당 char가 있으면 ret에 양 사이드에 붙인다.
	# 홀수 인지 짝수인지 먼저
	# 홀수는 한개의 char만 가능
	if( cnt[chr(i)] > 0) :
		#0개 이상이면 홀수인지 짝수인지 확인 
		if cnt[chr(i)>1]:
			#1보다 크면 
		if cnt[chr(i)] %2 == 1 :
			#홀수면 가운데 와야 함 

			#mid 찾기 
			high = len(ret)-1
			low =  0
			mid = (high-low)/2 +low
			# mid를 기점으로 left, right를 나눠야함 
			left_pad =[: mid+1]# mid를 포함해야 한다.
			right_pad = [mid+1:]
			ret = left_pad+ 

		else:
			#짝수면 
			#사이드에 붙이기 
