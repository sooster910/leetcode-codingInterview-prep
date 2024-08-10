"""
주어진 문자열에서 빈도수 구해서 가장 높은 알파벳 찾기 

"""


word=str(input()).upper()

cnt = [0] *26

for i in range(65,65+27-1):
	cnt[i-65]+=word.count(chr(i))

max_freq = max(cnt)
if cnt.count(max_freq)>=2:
	print("?")
else:
	print(chr(65+cnt.index(max_freq)))
