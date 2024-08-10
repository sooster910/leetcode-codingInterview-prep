"""
주어진 문자열에서 빈도수 구해서 가장 높은 알파벳 찾기 

"""


word=str(input()).upper()

cnt = [0] * 26  # A-Z까지 26개의 알파벳 카운트를 위한 리스트 초기화
for i in range(65, 65+27-1):  # ASCII 코드 65(A)부터 90(Z)까지 반복
    cnt[i-65] += word.count(chr(i))  # 각 알파벳의 출현 횟수를 cnt 리스트에 저장

max_freq = max(cnt)  # 가장 높은 빈도수 찾기

if cnt.count(max_freq) >= 2:  # 최대 빈도수가 2개 이상이면
    print("?")  # "?" 출력
else:  # 최대 빈도수가 하나뿐이면
    print(chr(65 + cnt.index(max_freq)))  # 해당 알파벳 출력
