# https://school.programmers.co.kr/learn/courses/30/lessons/42885?language=python3
def solution(people, limit):
    sortedPeople = sorted(people)
    left = 0
    right = len(people)-1
    cnt =0
    while(left<right):
        #제일 가벼운 사람, 무거운 사람 합이 limit보다 작거나 같으면, 보트에 태운다
        if(sortedPeople[left]+sortedPeople[right]<=limit):
            cnt +=1
            left+=1
            right-=1
            
        else:
        #limit보다 넘었기 때문에, 한사람은 보트에 태우고 더 가벼운 사람을 찾는다. 
            right-=1
            cnt+=1
        
    if(left == right): 
        cnt+=1
    return  cnt