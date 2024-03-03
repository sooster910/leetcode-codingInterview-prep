import heapq 
class MedianFinder:

    def __init__(self):
        self.lower=[]
        self.higher=[]

    def addNum(self, num: int) -> None:
        heappush(self.lower, -num)
        heappush(self.higher, -heappop(self.lower))

        if(len(self.higher)> len(self.lower)):
            heappush(self.lower, -heappop(self.higher))

    def findMedian(self) -> float:
        if(len(self.lower)!=len(self.higher)):
            return -self.lower[0]
        else:
            return (self.higher[0]-self.lower[0])/2


# Your MedianFinder object will be instantiated and called as such:
# obj = MedianFinder()
# obj.addNum(num)
# param_2 = obj.findMedian()