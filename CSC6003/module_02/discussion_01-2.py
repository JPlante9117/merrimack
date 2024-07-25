print("I'll copy anything you say until you 'EXIT'.")
while True:
    #do
    userInput = input()
    #until
    if (userInput == "EXIT"):
        break
    else:
        print(userInput)
