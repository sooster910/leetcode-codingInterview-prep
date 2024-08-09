"""
2진수 8진수
https://www.acmicpc.net/problem/1373

2진수가 주어졌을 때 8진수로 변환하는 프로그램작성

2진수->10진수->8진수

int("", 2)

"""

num=str(input())

print(oct(int(num,2))[2:]) 