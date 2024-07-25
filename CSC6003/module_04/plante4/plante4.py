from MusicCollection import *
from CustomExceptions import *
from Dispatch import disp_dict as dispatcher, handle_other_command

# Program
while True:
    collection = MusicCollection()
    user_input = input("What would you like to do? Type \"help\" to see a list of commands: ")

    dispatcher.get(user_input, handle_other_command)(collection)

    print("\n")

