import random

def p1():
    cpu_selection = random.randrange(1, 101)
    print("Guess between 1 and 100")
    user_guess = 0
    while user_guess != cpu_selection:
        user_guess = int(input("guess: "))
        if user_guess < cpu_selection:
            print("Guess higher!")
        else:
            print("Guess lower!")

    print("Got it! It's %d" % cpu_selection)

def p2():
    user_input = int(input("Enter a positive number: "))
    total = 0
    while user_input >= 0:
        total += user_input
    
    print("All those numbers add to %d" % total)

def p3():
    list = []
    for x in range(10, 0, -1):
        list.append(x)
        print(x)
    list.reverse()
    for x in list:
        print(x)

def p4():
    total = 0
    for x in range(0, 101, 2):
        total += x

    print(total)

def p5():
    u_i = int(input("Enter a positive integer: "))
    
    print("counting up!")
    for cu in range(1, u_i + 1):
        print(cu)
    
    cd = u_i
    print("counting down!")
    while cd > 0:
        print(cd)
        cd -= 1

# Program
prompt = int(input("Select Prompt 1 - 5: "))

match prompt:
    case 1:
        p1()
    case 2:
        p2()
    case 3:
        p3()
    case 4:
        p4()
    case 5:
        p5()