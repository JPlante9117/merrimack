import time, sys

def collatz(num):
    global userInp
    isEven = num % 2 == 0

    if (isEven):
        calculation = num // 2
        print(str(calculation))
    else:
        calculation = 3 * num + 1
        print(str(calculation))

    userInp = calculation

print('Let\'s explore the Collatz Sequence. Give me a starting integer!')
userInp = input()

try:
    userInp = int(userInp)
    try:
        while userInp != 1:
            collatz(userInp)
            time.sleep(0.05)
    except KeyboardInterrupt:
        sys.exit()
except:
    print('Invalid input')