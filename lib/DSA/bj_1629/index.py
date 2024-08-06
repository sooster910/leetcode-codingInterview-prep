A,B,C = map(int, input().split())

print(A,B,C)

ret = 1
exponent =B 
base = A
while( exponent>0 ):
    #exponent가 홀수인경우
    if ( exponent %2 ==1):
        ret = (base*ret)%C

    base = (base*base)%C
    exponent = exponent//2
  
print(ret)