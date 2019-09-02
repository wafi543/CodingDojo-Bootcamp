class BankAccount:
    def __init__(self, int_rate, balance):
        self.int_rate = int_rate
        self.balance = balance

    def deposit(self, amount):
        self.balance += amount

    def withdraw(self, amount):
        if self.balance >= amount:
            self.balance -= amount
        else:
            print("Insufficient funds: Charging a $5 fee")

    def display_account_info(self):
        print("Balance: $",self.balance)

    def yield_interest(self):
        self.balance = self.balance * self.int_rate

account1 = BankAccount(0.14,4500)
account2 = BankAccount(0.4,8504)

account1.deposit(345)
account1.deposit(120)
account1.withdraw(90)
account1.yield_interest()

print("Balance: ",account1.balance, ", Interest Rate: ",account1.int_rate)

account2.deposit(67)
account2.deposit(340)
account2.withdraw(80)
account2.withdraw(100)
account2.withdraw(200)
account2.withdraw(50)
account2.yield_interest()

print("Balance: ",account2.balance, ", Interest Rate: ",account2.int_rate)
