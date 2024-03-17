def solution(targets):
    cnt=0
    targets = sorted(targets)
    prev_start=0
    prev_end = 0
    for target in targets:
        cur_start, cur_end = target
        if(cur_start>=prev_end):
            #업데이트 한다. 
            prev_start = cur_start
            prev_end = cur_end
            cnt+=1
        else:
            # 겹친다. 범위 좁힌다. 
            prev_start = min(prev_start, cur_start)
            prev_end = min(prev_end, cur_end)
            
    return cnt