from Bank import Bank
from Dispatch_Controller import dispatcher, handle_other_command

# Instantiate Bank
BANK = Bank([])

def menu():
    """Prints user interface options"""
    print("""
1: Create Account
2: Deposit
3: Withdraw
4: Check Balance
5: Transfer
6: Quit
""")
    
def execute_choice(choice):
    """Runs the user's choice through the dispatcher"""
    dispatcher.get(choice, handle_other_command)(BANK)

def continue_operation():
    """Bank Operation Recursive Loop"""
    menu()
    choice = input("Please select an option from above. ")
    execute_choice(choice)

    should_continue = ''
    while should_continue != 'y' and should_continue != 'n':
        should_continue = input("\nWould you like to do another operation? [y]es/[n]o ").lower()
        if (should_continue == 'y'):
            continue_operation()
        elif (should_continue == 'n'):
            execute_choice('6')
        else:
            print('Invalid Response')

    
# Run Program
continue_operation()