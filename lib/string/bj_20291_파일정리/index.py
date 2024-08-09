from collections import Counter

n=int(input())

arr =[]
for i in range(n):
	arr.append( input().split(".")[1])
counter_dict = Counter(arr)

sorted_dict = dict(sorted(counter_dict.items()))

for key,value in sorted_dict.items():
	print(key,value)