def selection_sort(list):
    for i in range(0,len(list)):
        minIndex = i
        for j in range(i+1,len(list)):
            if list[j] < list[minIndex]:
                minIndex = j
        if minIndex != i:
            list[i], list[minIndex] = list[minIndex], list[i]
    return list

print(selection_sort([8,5,2,9,0,4,7,1,3]))
        
