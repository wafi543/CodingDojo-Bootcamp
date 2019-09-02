import store

class Product:
    def __init__(self, name, price, category):
        self.name = name
        self.price = price
        self.category = category

        def update_price(self, percent_change, is_increased):
            if is_increased:
                self.price += (price * percent_change)
            else:
                self.price -= (price * percent_change)
        def print_info(self):
            print("name: ",name,", category: ",category,", price: ",price)


water = Product("Water",1,"Drinks")
coke = Product("Coka Cola",2.5,"Drinks")
toast = Product("Toast",5,"Breads")

mohaStore = Store("Moha Store",[water,coke,toast])
mohaStore
