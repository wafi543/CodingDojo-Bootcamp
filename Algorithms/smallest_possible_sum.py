def smallest(x):
    x.sort(reverse=True)
    i=0
    con=True
    while (con):
        for j in range(i+1,len(x)):
            if x[i] > x[j]:
                x[i] = x[i] - x[j]
                x.sort(reverse=True)
                i=0
            print(x)
        i+=1
        if sum(x) != x[0]*len(x):
            i=0
        else:
            con=False

smallest([6,9,6,4,9,13,67,4,67,5,4])