s = str(input())

m = int(input())
cursor = len(s)
for _ in range(m):
	command=input().split()
	
	print(command,s, cursor)
	if command[0] == "P":
		s = s[0:cursor] + command[1]+ s[cursor:]
		cursor = max(cursor-1,0)
	elif command[0] == "L":
		cursor = max(0, cursor-1)
		print("L")
	elif command[0] =="D":
		cursor = min(cursor+1, len(s))
	elif command[0] == "B":
		target_index = max(0,cursor-1)
		s=s[0:target_index] + s[target_index+1:]
		cursor= max(0,cursor-1)


print("answer",s)


