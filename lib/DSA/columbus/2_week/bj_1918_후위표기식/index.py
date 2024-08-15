"""

( 이라면 ) 할 때까지는 pop하지 않는다 

피연산자를 만났을 때 
- result에 붙인다
- ( 를 만났을 경우 
	- 붙인다
- )를 만났을 경우 
	- stack.pop  stack에 있는거 모두 ''.join(stack)
연산자를 만났을 때 
- ( 오픈 되어 있는 상태일 경우
	- 그냥 stack.append()
- 아닐 경우 
	- 현재 연산자와 stack[-1] 를 비교해 , 우위가 작거나 같으면 pop 한다. 

loop을 다 돌고 stack이 있으면 result에 붙여 스택을 비워준다.	
	
"""

postfix=str(input())
stack =[]
isOpen = False
for p in postfix:
	if  65<=ord(p)<=65+27-1:
		