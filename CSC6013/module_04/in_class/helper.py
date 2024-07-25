import math

def do_math(n):
    s = 0
    for x in range(n):
        y = x + 1
        print(2**(y * -1))
        s = s + 2**(y * -1)

    print("R", round(s, 3))

do_math(8)

print("O:", round(1 - (1/2)**8, 3))