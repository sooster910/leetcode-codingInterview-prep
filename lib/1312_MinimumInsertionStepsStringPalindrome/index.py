# mininum insertion steps to make

##############################
#
# 7/10/24 스스로 dp를 생각하고 풀었음. 
# 이 접근법에서 조금 더 생각해야 함. 
#
##############################

s=str(input())


dp = [ [ 0 for _ in range(len(s)) ] for _ in range(len(s))]


# length =1
for i in range(len(s)):
	dp[i][i] = 0

# length = 2

for i in range(len(s)-2+1): 
	j= i+1
	if(s[i] == s[j]) :
		dp[i][j] = 0
	else:
		dp[i][j] = 1


# length >=3
for length in range( 3,len(s)+1): 
	for i in range(len(s)-length+1):
		j = i+length-1

		if( s[i] == s[j]):
			dp[i][j] = dp[i+1][j-1]
		else:
			dp[i][j] = dp[i+1][j-1]+2

print(dp[0][len(s)-1])

