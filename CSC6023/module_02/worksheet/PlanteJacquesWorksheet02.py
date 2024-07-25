import random

def mode_brute(a):
    maxValue, maxCount = 0, 0
    for i in range(len(a)):
        count = 0
        for j in range(len(a)):
            if(a[i] == a[j]):
                count += 1
        if (count > maxCount):
            maxCount = count
            maxValue = a[i]

    return maxValue

def mode_TaC(a):
    maxValue, maxCount = 0, 0
    a.sort()
    i = 0

    # We will iterate over len(a), but we're actually going to use i for counting
    for j in range(len(a)):
        # Keep us in bounds
        if i >= len(a):
            break

        current = a[i]
        count = 0
        # While we are on the same number as the loop's current, keep checking next until false
        while i < len(a) and current == a[i]:
            count += 1
            i += 1
        if (count > maxCount):
            maxCount = count
            maxValue = current

    return maxValue

def main():
    randArr = [random.randrange(1, 10) for _ in range(10000)]

    print("Brute Force: ")
    print(mode_brute(randArr))

    print("Transform-and-Conquer: ")
    print(mode_TaC(randArr))

main()
