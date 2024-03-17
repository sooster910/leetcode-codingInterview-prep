#https://school.programmers.co.kr/learn/courses/30/lessons/42884#qna
#조건 두가지 
#모든 차량이 단속카메라를 만나야 한다.
#최소 몇대의 카메라를 설치 해야 하나
    
# 10,000대 이하
# routes에는 차량의 이동 경로 포함 [-20,-15]
#-20은 0번째 차량이 고속도로에 진입한 지점, -15 0번째 차량이 고속도로에서 나간 지점 
# 차량의 진입 진출 지점에 카메라가 설치되어 있어도 카메라를 만난 것으로 간주 

def solution(routes):
    sorted_routes = sorted(routes)
    prev_start= -3001
    prev_end= -3001
    cnt=0
    for route in sorted_routes:
        cur_start, cur_end = route
        if(prev_start<=cur_start<=prev_end):
            #overlapping
            prev_start=max(prev_start, cur_start)
            prev_end = min(prev_end, cur_end)
            
        else:
            #non-overlapping 새로운 지점에 카메라 설치 
            cnt+=1
            prev_start=cur_start
            prev_end = cur_end
    return cnt