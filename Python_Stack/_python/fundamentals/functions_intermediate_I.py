import random
def randInt(min= None, max= None):
    num = random.random()
    if min == None and max == None:
        return int(num*100)
    elif min == None and max != None:
        return int(num*50)
    elif min != None and max == None:
        return int(num*50+50)
    elif min != None and max != None:
        return int(num*450+50)


print(randInt()) 		    # should print a random integer between 0 to 100
print(randInt(max=50)) 	    # should print a random integer between 0 to 50
print(randInt(min=50)) 	    # should print a random integer between 50 to 100
print(randInt(min=50, max=500))    # should print a random integer between 50 and 500