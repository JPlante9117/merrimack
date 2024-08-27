def fact():
    n = int(input("Enter a num: "))
    while n < 0:
        n = int(input("Try again: "))
    if (n == 0):
        print("0 is 1")
    else:
        f = 1
        for i in range(1, n+1):
            f *= i
        print("uhhh ", i, " is ", f)

fact()