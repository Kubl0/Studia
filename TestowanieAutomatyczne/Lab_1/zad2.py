x = int(input("Podaj 1 liczbe >> "))
y = int(input("Podaj 2 liczbe >> "))

for i in range(x):
    if(i==0 or i==x-1):
        for j in range(y):
            print('*', end="")
    else:
        for j in range(y):
            if(j==0 or j==y-1):
                print('*', end="")
            else:
                print(' ', end="")
    print()