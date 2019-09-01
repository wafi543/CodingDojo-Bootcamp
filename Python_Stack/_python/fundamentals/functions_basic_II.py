def countdown(num):
    list = []
    for x in range(num,-1,-1):
        list.append(x)
    return list

print(countdown(5))

def print_and_return(list):
    print(list[0])
    return list[1]

print(print_and_return([1,2]))

def first_plus_length (list):
    return list[0] + len(list)

print(first_plus_length([1,2,3,4,5]))

def values_greater_than_second(list):
    if len(list) < 2:
        return False
    else:
        list2 = []
        for x in list:
            if x > list[1]:
                list2.append(x)
        return list2
print(values_greater_than_second([5,2,3,2,1,4]))


def length_and_value(size,value):
    list = []
    for x in range(0,size+1,1):
        list.append(value)
    return list

print(length_and_value(4,7))
