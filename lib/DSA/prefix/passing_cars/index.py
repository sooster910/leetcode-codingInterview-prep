"""
passing cars 
"""

arr = list(map(int, input().split()))

prefix = [0 for _ in range(len(arr)+1)]


zero_cars = 0
cnt = 0 
for i in range(len(arr)) :
	if( arr[i] == 0):
		zero_cars+=1

	else : 
		cnt =(zero_cars*1)+cnt


if(cnt >1000000000):
	print(-1)
else:
	print(cnt)



