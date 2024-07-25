from BankAccount import BankAccount

class AccountNotFoundException(Exception):
    pass

class NotEnoughAccountsException(Exception):
    pass

class SameAccountException(Exception):
    pass

class Bank:
    def __init__(self, accounts=[]):
        self.__account_num = 0
        self.__accounts = accounts

    def create_account(self):
        """Creates a new BankAccount instance and adds it to the accounts list"""
        balance = input("How much would you like to deposit into your new account? ")
        self.__increment_account_number()
        new_acc = BankAccount(self.__get_account_number(), balance)
        self.__add_account(new_acc)

    def __add_account(self, new_acc: BankAccount):
        """Adds the created account to the accounts list"""
        self.__accounts.append(new_acc)

    def get_accounts(self):
        """Gets the accounts"""
        return self.__accounts

    def get_account(self, acct_num):
        """Gets a specific account from our accounts list"""
        try:
            found_acct = None
            acct: BankAccount
            for acct in self.get_accounts():
                if (acct.get_account_number() == int(acct_num)):
                    found_acct = acct
                    break

            if (found_acct):
                return found_acct
            else:
                raise AccountNotFoundException
        except AccountNotFoundException:
            print('No Matching Account Found')

    def deposit(self, acct_num, amount):
        """Performs the deposit_funds method on a specific BankAccount"""
        acct = self.get_account(acct_num)

        if (acct):
            acct.deposit_funds(amount)

    def withdraw(self, acct_num, amount):
        """Performs the withdraw_funds method on a specific BankAccount"""
        acct = self.get_account(acct_num)

        if (acct):
            acct.withdraw_funds(amount)

    def transfer(self, acct_1, acct_2, amount):
        """Validates ability to withdraw from the first account, then performs a transfer between the first and second account"""
        from_acct = self.get_account(acct_1)
        to_acct = self.get_account(acct_2)

        if (from_acct and to_acct):
            withdrawal_successful = from_acct.withdraw_funds(amount)
            
            if (withdrawal_successful):
                to_acct.deposit_funds(amount)

    def check_balance(self, account_num):
        """Performs get_balance method on a specific BankAccount"""
        acct = self.get_account(account_num)

        if (acct):
            print(f'Your Account Balance is ${acct.get_balance():.2f}')
            return acct.get_balance()

    def __increment_account_number(self):
        """Controls our Account Number we assign to BankAccounts"""
        self.__account_num += 1

    def __get_account_number(self):
        """Returns the current Account Number we are on"""
        return self.__account_num
