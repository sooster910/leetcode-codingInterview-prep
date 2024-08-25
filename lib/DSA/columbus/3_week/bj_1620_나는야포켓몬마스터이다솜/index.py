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

시간 복잡도 : O(n)
"""

n,m=map(int,input().split())


pocketmon = ["a"]*(n+1) #임의의 default문자로 pocketmon 빈배열 만들기
mapper = {}
for i in range(1,n+1): #주어진 포켓몬의 번호만큼 순회하면서
	name = str(input())
	mapper[name] = i  # 포켓몬의 번호를 넣기위해 해당하는 이름에 매핑
	pocketmon[i] = name #포켓몬 이름을 넣기 위해 해당하는 넘버에 매핑

for i in range(m):
	q=input()
	if q.isdigit(): #숫자면
		idx = int(q) 
		print(pocketmon[idx]) #포켓몬 도감에서 찾기 
	else :
		print(mapper[q]) #문자면 mapper에서 찾기 



