print("Hello World")
name = "Wafi"
print("Hello",name,"!") # with a comma
print("Hello "+name+"!") # with a +

name = 42
print("Hello",name,"!") # with a comma
print("Hello "+str(name)+"!") # with a +	-- this one should give us an error!

# 4. print "I love to eat sushi and pizza." with the foods in variables
fave_food1 = "Kabsa"
fave_food2 = "Pizza"
print("I love to eat {} and {}.".format(fave_food1, fave_food2)) # with .format()
print(f"I love to eat {fave_food1} and {fave_food2}.") # with an f string