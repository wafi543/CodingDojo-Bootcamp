import math

def cakes (list1, list2):
    count = float('inf')
    for key in list1:
        try:
            temp = math.floor(list2[key] / list1[key])
            if temp < count:
                count = temp
        except:
            return 0
    return count


print(cakes({"flour":500, "sugar":200, "eggs":1}, {"floour":1500, "sugar":1200, "eggs":5, "milk":200}))