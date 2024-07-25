from Bank import Bank, NotEnoughAccountsException, SameAccountException
from BankAccount import BankAccount
import sys

# Helper Funcs
def display_accounts(BANK: Bank):
    """Prints out all account numbers"""
    accounts = BANK.get_accounts()
    acc: BankAccount
    print('Your Active Accounts:')
    for acc in accounts:
        print(acc.get_account_number())

def validate_enough_accounts(BANK: Bank, account_requirement: int):
    """Checks whether we have enough accounts to perform an action"""
    acct_count = len(BANK.get_accounts())
    if (acct_count < account_requirement):
        raise NotEnoughAccountsException
    
# Handlers
def handle_other_command(BANK: Bank):
    """Fallback Function"""
    print('Invalid Response')

def handle_create_account(BANK: Bank):
    """Creates a new account using Bank"""
    BANK.create_account()

def handle_deposit(BANK: Bank):
    """Attempts to deposit funds to a particular BankAccount"""
    try:
        validate_enough_accounts(BANK, 1)
        display_accounts(BANK)
        account_selection = input('Which account are you depositing into? ')
        amount = input('How much money are you despositing? ')
        BANK.deposit(account_selection, amount)
    except NotEnoughAccountsException:
        print('Not Enough Accounts to Perform This Action')

def handle_withdraw(BANK: Bank):
    """Attempts to withdraw funds from a particular BankAccount"""
    try:
        BANK.
        validate_enough_accounts(BANK, 1)
        display_accounts(BANK)
        account_selection = input('Which account are you withdrawing from? ')
        amount = input('How much money are you withdrawing? ')
        BANK.withdraw(account_selection, amount)
    except NotEnoughAccountsException:
        print('Not Enough Accounts to Perform This Action')

def handle_check_balance(BANK: Bank):
    """Attempts to check the balance of a particular BankAccount"""
    try:
        validate_enough_accounts(BANK, 1)
        display_accounts(BANK)
        account_selection = input('Which account would you like to check the balance of? ')
        BANK.check_balance(account_selection)
    except NotEnoughAccountsException:
        print('Not Enough Accounts to Perform This Action')

def handle_transfer(BANK: Bank):
    """Attempts to transfer funds between two BankAccount instances"""
    try:
        validate_enough_accounts(BANK, 2)
        display_accounts(BANK)
        account_selection_1 = input('Which account would you like to transfer money from? ')
        account_selection_2 = input('Which account would you like to transfer money to? ')
        amount = input('How much would you like to transfer? ')
        if (account_selection_1 == account_selection_2):
            raise SameAccountException
        BANK.transfer(account_selection_1, account_selection_2, amount)
    except SameAccountException:
        print('Cannot transfer to and from same account')
    except NotEnoughAccountsException:
        print('Not Enough Accounts to Perform This Action')
    

def handle_quit(BANK: Bank):
    """Quits the program"""
    print('\nGoodbye!')
    sys.exit()

# Dispatch Dictionary
dispatcher = {
    '1': handle_create_account,
    '2': handle_deposit,
    '3': handle_withdraw,
    '4': handle_check_balance,
    '5': handle_transfer,
    '6': handle_quit
}