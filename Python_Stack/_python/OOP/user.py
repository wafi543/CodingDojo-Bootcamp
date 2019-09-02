from bank_account import BankAccount

class User:		# here's what we have so far
    def __init__(self, name, email):
        self.name = name
        self.email = email
        self.account1 = BankAccount(int_rate=0.02, balance=0)	# added this line
        self.account2 = BankAccount(int_rate=0.08, balance=0)	# added this line

        
    # adding the deposit method
    def make_deposit(self, amount):
    	self.account.balance += amount
    
    def make_deposit2(self, amount):
    	self.account2.balance += amount

    def make_withdrawal(self, amount):
        self.account.balance -= amount
    
    def make_withdrawal2(self, amount):
        self.account.balance -= amount
    
    def display_user_balance(self):
        print(self.name,self.account.balance)
    
    def transfer_money(self, other_user, amount):
        self.account.balance -= amount
        other_user.account.balance += amount 

guido = User("wafi","wafi543@outlook.sa")
monty = User("mohammed","moha3434@coding.dojo")
nawaf = User("Nawaf","nawaf345@hotmail.com")
guido.make_deposit(100).make_deposit(200).make_deposit(50)
print(guido.account.balance)	# output: 300
print(monty.account.balance)	# output: 50

monty.make_withdrawal(40)
guido.transfer_money(nawaf,130)

print(guido.name)
