class OverdraftError(Exception):
    pass

class BankAccount:
    def __init__(self, account_number: int, balance: float = 0.00):
        self.__account_number = account_number
        self.__balance = self.sanitize_money(balance)

    def get_balance(self):
        """Returns the balance of the account"""
        return self.__balance
    
    def __set_balance(self, new_balance):
        """Safely sets the new balance of the account"""
        self.__balance = new_balance

    def get_account_number(self):
        return self.__account_number

    def sanitize_money(self, amount):
        """Safely sanitizes user input, defaulting to 0.00 if not valid"""
        try:
            return round(float(amount), 2)
        except:
            print('Invalid Amount Provided. Setting to $0.00')
            return 0.00

    def can_withdraw(self, withdrawal_amt):
        """Determines if we can withdraw from this account"""
        withdrawal = self.sanitize_money(withdrawal_amt)
        balance = self.get_balance()

        if (withdrawal > balance):
            return False

        return True
    
    def withdraw_funds(self, withdrawal_amt):
        """Withdraws money from the account"""
        withdrawal = self.sanitize_money(withdrawal_amt)
        balance = self.get_balance()
        enough_funds = self.can_withdraw(withdrawal_amt)
        try:
            if (not enough_funds):
                raise OverdraftError
            else:
                self.__set_balance(balance - withdrawal)
                print('Funds have been withdrawn to your account!')
                return True
        except OverdraftError:
            print('You do not have enough funds to withdraw that amount!')
            return False

    def deposit_funds(self, deposit_amt):
        """Deposits money into the account"""
        deposit = self.sanitize_money(deposit_amt)
        balance = self.get_balance()
        self.__set_balance(deposit + balance)
        print('Funds have been added to your account!')

    def check_account_details(self):
        """Prints out the account details, but does not return the account info"""
        print(f'Your account information is:\nAccount Number: {self.get_account_number()}\nCurrent Balance: {self.check_balance()}')

    def check_balance(self):
        """Prints out the account balance, but does not return the balance info"""
        print(f'Your current balance is ${self.get_balance():.2f}')

    