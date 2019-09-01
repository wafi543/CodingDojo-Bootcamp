def biggie_size(list):
    for x in range(0, len(list), 1):
        if list[x] > 0:
            list[x] = "big"
    return list


print(biggie_size([-1, 3, 5, -5]))


def count_positives(list):
    count = 0
    for x in list:
        if x > 0:
            count = count + 1
            print(x, "big", count)

    list[len(list)-1] = count
    return list


print(count_positives([-1, 1, 1, 1]))


def sum_total(list):
    sum = 0
    for x in list:
        sum += x
    return sum


print(sum_total([1, 2, 3, 4]))


def average(list):
    sum = 0
    for x in list:
        sum += x
    return sum/len(list)


print(average([1, 2, 3, 4]))


def length(list):
    return len(list)


print(length([37, 2, 1, -9]))


def minimum(list):
    if len(list) < 1:
        return False
    else:
        min = list[0]
        for x in list:
            if x < min:
                min = x
        return min


print(minimum([37, 2, 1, -9]))


def maximum(list):
    if len(list) < 1:
        return False
    else:
        max = list[0]
        for x in list:
            if x > max:
                max = x
        return max


print(maximum([37, 2, 1, -9]))


def ultimate_analysis(list):
    return {"sumTotal": sum_total(list), "average": average(list), "minimum": minimum(list), "maximum": maximum(list)}


print(ultimate_analysis([37, 2, 1, -9]))


def reverse_list(list):
    for i in range(0, len(list), 1):
        lastIndex = len(list)-1
        tmp = list[i]
        list[i] = list[lastIndex-i]
        list[lastIndex-i] = tmp
    return list


print(reverse_list([37, 2, 1, -9]))
