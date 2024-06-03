rows = 6
columns = 6
queries=[[2,2,5,4],[3,3,6,6],[5,1,6,3]]
result =[8, 10, 25]

matrix= [ [(i) * columns + (j+1) for j in range(columns)]  for i in range(rows)]

for i in range(4):
    print("")