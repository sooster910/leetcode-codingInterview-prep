class Solution:
    def checkInclusion(self, s1: str, s2: str) -> bool:
        left = right = 0
        valid = 0
        need = {}
        window = {}
        # t 에 있는 문자 need로 옮기기
        for c in s1:
            need[c] = need.get(c,0)+1


        while( right < len(s2)):
            c=s2[right]
            right+=1

            if( c in need):
                window[c] = window.get(c,0)+1
                if window[c] == need[c]: # 문자가 need에도 있고 window 에도 있으면 valid 추가
                    valid+=1

            while(right - left >= len(s1)): # t의 길이만큼 window를 이동시키기
                if valid == len(need):
                    return True
                d= s2[left]
                left+=1
                if d in need:
                    if window[d] == need[d]:
                        valid-=1
        return False