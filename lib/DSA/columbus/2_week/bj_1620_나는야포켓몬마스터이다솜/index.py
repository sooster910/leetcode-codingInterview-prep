"""
첫째줄에 도감에 수록되어 잇는 포켓몬의 개수 N이랑 내가 맞춰야 하는 개수 M이 주어진다.
100,000 
N개의 줄에 포켓몬의 번호가 1번인 포켓몬 부터 N번에 해당하는포켓문까지 한줄에 
한줄에 하나씩 입력 
첫글자 대문자, 나머지 소문자
일부 마지막 문자만 대문자 
2<=포켓몬이름 길이 <=20


그 다음줄 부터 총 M줄에 내가 맞춰야 하는 문제가 입력으로 ㄷ르어온다. 
문제가 알파벳이면 -> 번호를 말해야 하고, 
숫자이면 -> 포켓몬번호에 해당하는 문자를 출력 


"""

n,m=map(int,input().split())


pocketmon = ["a"]*(n+1)
mapper = {}
for i in range(1,n+1):
	name = str(input())
	mapper[name] = i
	pocketmon[i] = name

for i in range(m):
	q=input()
	if q.isdigit():
		idx = int(q)
		print(pocketmon[idx])
	else :
		print(mapper[q])



