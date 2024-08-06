
def makePrint(comb_arr):

	for num in comb_arr:
		print(num)

# combination template

def comb(depth, comb_arr, arr):
	if( len(comb_arr) == n):
		if(sum(comb_arr)==100):
			makePrint(comb_arr)
			return True 
		else:
			return False

	for i in range(depth ,len(arr)):
		# print(i)
		comb_arr.append(arr[i])
		if comb(i+1, comb_arr,arr):
			return True 

		else:
			# return comb_arr
			comb_arr.pop()
	return False




n = 7
arr= []
for _ in range(9):
	arr.append(int(input()))

arr.sort()
comb(0,[], arr)










