import itertools as it
def isUnique (path):
    for x in range(0,len(path)):
        for y in range(x+1,len(path)):
            if path[x] == path[y]:
                return False
    return True

def boggle (matrix, word):
    obj = {}
    for z in range(len(word)):
        key = word[z]
        try:
            tmp = obj[word[z]]
            key = word[z]+"2"
            obj[key] = []
        except:
            obj[key] = []
        for i in range(len(matrix)):
            for j in range(len(matrix[i])):
                if matrix[i][j] == word[z]:
                    obj[key].append([i,j])
    print(obj)
    combinations = it.product(*(obj[Name] for Name in obj))
    paths = list(combinations)

    print(paths)
    isAvailable = False
    for path in paths:
        if isUnique(path) == False:
            continue
        isCorrect = True
        for x in range(len(path)-1):
            if abs(path[x][0] - path[x+1][0]) > 1 or abs(path[x][1] - path[x+1][1]) > 1:
                isCorrect = False
                break
        print("path: ",path)
        print("isCorrect",isCorrect)

        if isCorrect:
            isAvailable = True
            break
    return isAvailable

matrix = [['I','L','A','W'],
        ['B','N','G','E'],
        ['I','U','A','O'],
        ['A','S','R','L']]

print(boggle(matrix, 'SINUS'))