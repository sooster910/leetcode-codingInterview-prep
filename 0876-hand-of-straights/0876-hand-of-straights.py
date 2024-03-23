class Solution(object):
    # 이 문제들의 주요 포인트 : 
    # 문제의 조건에서 모든 원소들을 사용해야 한다. 
    # 그럼 그 조건에 다 맞추려면, 사용하고 남은 수중에 가장 작은 수를 새로운 그룹의 최소값으로 넣고 그 그룹에 해당하는 연속적으로 증가하는 수를 배열에서 찾는다.
    #각 키를 돌면서, 
    # 그 키가 mapper에 있는지 확인, 
    # 만약 잇다면 (이게 최솟값이다.)
    # 최솟값을 기준으로 연속된 값을 정해 
    # 그 값들이 안에 있는지 확인한다. 
    # 없다면,  리턴
    def isNStraightHand(self, hand, groupSize):
        """
        :type hand: List[int]
        :type groupSize: int
        :rtype: bool
        """
        if(len(hand)%groupSize != 0):
            return False
        freq = {}
        for h in hand:
            freq[h] = (freq.get(h) or 0) +1
        
        for f in sorted(freq.keys()):
            while( freq[f] > 0):
                freq[f]-=1
                for i in range(f+1, f+groupSize):
                    #i 있는지 확인 
                    if( i in freq and freq[i]>0 and i>0):
                        freq[i]-=1
                    else:
                        return False
        return True
         
        



            


        
        