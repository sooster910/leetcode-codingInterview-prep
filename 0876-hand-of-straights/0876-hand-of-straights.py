class Solution(object):
    def isNStraightHand(self, hand, groupSize):
        """
        :type hand: List[int]
        :type groupSize: int
        :rtype: bool
        """
        if(len(hand)%groupSize != 0):
            return False

        sortedHand = sorted(hand)
        rearranged = []
    
        shouldCreateNew = True
        
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
        #각 키를 돌면서, 
        # 그 키가 mapper에 있는지 확인, 
        # 만약 잇다면 (이게 최솟값이다.)
        # 최솟값을 기준으로 연속된 값을 정해 
        # 그 값들이 안에 있는지 확인한다. 
        # 없다면,  리턴 
        



            


        
        