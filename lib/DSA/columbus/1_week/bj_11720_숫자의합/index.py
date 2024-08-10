"""
숫자 합 구하기

"""


n = int(input()) #
num = int(input()) #
str_num = str(num) # type casting(int->str)
num_list = [int(num) for num in str_num] 
print(sum(num_list)) 
