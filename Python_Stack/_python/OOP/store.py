import product

class Store:
    def __init__(self, name, products=[]):
        self.name = name
        self.products = products
    
    def add_product(self, new_product):
        self.products.append(new_product)

    def sell_product(self, id):
        tmp = self.products.pop(id)
        print(tmp.name,tmp.category,tmp.price)

    def inflation(self, percent_increase):
        for product in self.products:
            product.price += product.price * percent_increase

    def set_clearance(self, category, percent_discount):
        for product in self.products:
            if product.category == category:
                product.price -= product.price * percent_discount


    