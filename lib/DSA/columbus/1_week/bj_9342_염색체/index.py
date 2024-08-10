"""
염색체
"""
import re
from collections import Counter


n = int(input())  # 테스트 케이스의 수 입력
s = []  # 사용되지 않는 빈 리스트
required = ["A","B","D","E","F","C"]  # 허용되는 문자 리스트


# def isCon(s_dict, s_pressed):
#     pattern = r'^[ABCDEF]?A+F+C+[ABCDEF]?$'    
#     return bool(re.match(pattern, s_pressed))


def isCon(s_pressed):
    start = s_pressed.find('AFC')  # 'AFC' 문자열의 시작 위치 찾기
    pre = s_pressed[:start]  # 'AFC' 이전 부분 추출
    post = s_pressed[start+3:]  # 'AFC' 이후 부분 추출
    
    if(pre != ""):  # 'AFC' 이전에 문자가 있는 경우
        if(len(pre) == 1 and pre in required):  # 이전 문자가 하나이고 허용된 문자인 경우
            return True
        else:  # 그 외의 경우
            return False
    
    if(post != ""):  # 'AFC' 이후에 문자가 있는 경우
        if(len(post) == 1 and post in required):  # 이후 문자가 하나이고 허용된 문자인 경우
            return True
        else:  # 그 외의 경우
            return False
    
    return True  # 'AFC'만 있는 경우

def press(s):
    if not s:  # 빈 문자열인 경우
        return ""
    result = s[0]  # 결과 문자열의 첫 문자 초기화
    for char in s[1:]:  # 두 번째 문자부터 순회
        if char != result[-1]:  # 현재 문자가 이전 문자와 다른 경우
            result += char  # 결과 문자열에 추가
    return result  # 압축된 문자열 반환

for i in range(n):  # 테스트 케이스 수만큼 반복
    s_list = list(input())  # 입력 문자열을 리스트로 변환
    if len(s_list) < 3:  # 문자열 길이가 3 미만인 경우
        continue  # 다음 테스트 케이스로 넘어감
    s_pressed = press(s_list)  # 문자열 압축
    if isCon(s_pressed):  # 압축된 문자열이 조건을 만족하는지 확인
        print("Infected!")  # 조건 만족 시 "Infected!" 출력
    else:  # 조건을 만족하지 않는 경우
        print("Good")  # "Good" 출력