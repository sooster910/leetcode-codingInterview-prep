"""
길이가 다른 여러개의 쇠막대기를 효율적으로 절단하기 위해 서로 묶어 겹쳐놓은 상태서 절단한다.
이 때 위에서  절단 할 때 잘려진 쇠막대기 조각의 총 개수를 구하는 문제 이다. 

쇠막대기와 레이저를 괄호로 나타낸다. 

레이저는 여는 괄호와 닫는 괄호의 인접한 쌍으로 표현 
또한 모든 () 는 반드시 레이저를 표현한다.

풀이 방식은 쌍이 있다는 점에서 힌트를 얻어 스택으로 풀 수 있다. 

시간복잡도 : O(n)
"""

parenthesis= input()

stack=[]  
total=0
for i in range(len(parenthesis)): #주어진 괄호를 순회한다
    if parenthesis[i] == "(": # 만약 괄호가 ( 오픈이라면 
        stack.append(parenthesis[i]) # 스택에 추가 한다
    elif parenthesis[i] == ")": # 만약 괄호가 ) 이고
        if(parenthesis[i-1]=="("):  # 바로 직전이 ( 라면 
            stack.pop() # () 가 되니 곧 레이저 라는 의미가 된다. 그럼 막대를 자른다. 기존 막대의 길이와는 상관이 없으므로 pop한다.
            total+= len(stack) # 막대를 잘랐으니 total에 현재 있는 stack 을 추가한다 
        elif(stack[-1] == "("): # 괄호가) 이고 스택의 마지막이 ( 라면
            stack.pop()  #그냥 pop한다.
            total+=1  #total에 1개 추가한다.
print(total)



# 1차 풀이 방식  - 레이저는 r로 치환해 풀려고 했는데, 잘 안됐음
# parenthesis=str(input())
# open="("
# close=")"
# razor = "r"

# stack=[]
# cnt_r = 0
# for i in range (len(parenthesis)):
# 	if parenthesis[i] == open:
# 		stack.append(parenthesis[i]) 
# 	else :
# 		if parenthesis[i-1]==close:
# 			#레이저 
# 			stack[-1] = razor
# 		else if razor in parenthesis:
# 			#레이저가 있고 닫힌괄호라면
# 			#레이저 개수 세고 

