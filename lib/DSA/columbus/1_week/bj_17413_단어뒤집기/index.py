sentence = input()  # 사용자로부터 문장 입력 받기
answer = ""  # 최종 결과를 저장할 문자열 초기화
isOpen = False  # 태그 내부인지 여부를 나타내는 플래그
reverse_q = ""  # 뒤집을 단어를 임시 저장할 문자열

for s in sentence:  # 입력 문장의 각 문자에 대해 반복
    if s == " ":  # 현재 문자가 공백일 경우
        if isOpen:  # 태그 내부라면
            answer += s  # 공백을 그대로 결과에 추가
        else:  # 태그 외부라면
            answer += reverse_q + " "  # 버퍼의 단어를 뒤집어 결과에 추가하고 공백 추가
            reverse_q = ""  # 버퍼 초기화
    elif s.isalnum():  # 현재 문자가 알파벳 또는 숫자인 경우
        if isOpen:  # 태그 내부라면
            answer += s  # 문자를 그대로 결과에 추가
        else:  # 태그 외부라면
            reverse_q = s + reverse_q  # 문자를 버퍼의 앞에 추가 (역순 저장)
    elif s == "<":  # 태그 시작
        isOpen = True  # 태그 내부 플래그 설정
        answer += reverse_q + s  # 버퍼의 단어를 결과에 추가하고 '<' 추가
        reverse_q = ""  # 버퍼 초기화
    elif s == ">":  # 태그 종료
        isOpen = False  # 태그 내부 플래그 해제
        answer += s  # '>'를 결과에 추가
    else:  # 기타 문자 (특수 문자 등)
        answer += s  # 문자를 그대로 결과에 추가

answer += reverse_q  # 마지막에 버퍼에 남아있는 단어 처리
print(answer.strip())  # 결과 문자열의 앞뒤 공백을 제거하고 출력