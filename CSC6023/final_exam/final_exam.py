# def doubled(a):
#     dict = {}
#     for n in a:
#         if (dict.get(n)):
#             return True
#         else:
#             dict[n] = True
    
#     return False

# def main():
#     a1 = [0, 1, 2, 3, 4]
#     a2 = [0, 1, 2, 3, 2]
#     a3 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

#     print(doubled(a1))
#     print(doubled(a2))
#     print(doubled(a3))

# def greedy(amt):
#     coins = {
#         "quarters": 0,
#         "dimes"   : 0,
#         "pennies" : 0
#     }

#     while amt > 0:
#         if (amt >= 25):
#             coins["quarters"] += 1
#             amt -= 25
#         elif (amt >= 10):
#             coins["dimes"] += 1
#             amt -= 10
#         else:
#             coins["pennies"] += 1
#             amt -= 1

#     return coins

# def main():
#     print(greedy(30))

import random

def alea():
    a = []
    for n in range(1000):
        prob = random.randint(1, 100)
        if (prob <= 33):
            a.append(2)
        elif (prob <= 66):
            a.append(3)
        else:
            a.append(4)
    
    return a

def pick(arr):
    found = False
    index = None

    while not found:
        idx = random.randint(0, len(arr) - 1)
        item = arr[idx]
        if (item == 2):
            index = idx
            found = True

    return index

def main():
    randarr = alea()

    print(pick(randarr))

main()