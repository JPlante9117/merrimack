import random

def MCSS(a):
    """
    a: an array of positive and negative integers
    output: an integer of the Maximum Contiguous Subsequence Sum
    """
    largest, acc, i = 0, 0, 0
    for j in range(len(a)):
        acc += a[j]
        if (acc > largest):
            largest = acc
        elif (acc < 0):
            i = j + 1
            acc = 0
    return largest

def MCSSWithIndices(a):
    """
    a: an array of positive and negative integers
    output: a dictionary of the Maximum Contiguous Subsequence Sum and its starting and ending indices
    """

    # Replaced largest's initial value with a dictionary with all keys instantiated at 0
    largest, acc, i = {
        "largestSum"      : 0,
        "largestStartIdx" : 0,
        "largestEndIdx"   : 0
    }, 0, 0
    for j in range(len(a)):
        acc += a[j]
        # Now we check against the key instead of the variable directly
        if (acc > largest["largestSum"]):
            # We've found the largest, so update all the values with the current corresponding sum and positions
            largest["largestSum"] = acc
            largest["largestStartIdx"] = i
            largest["largestEndIdx"] = j
        elif (acc < 0):
            i = j + 1
            acc = 0
    return largest

def mainTestCases():
    tc1 = [-2, 11, -4, 13, -5, 2]
    tc2 = [5, -1, 56, -3, -18, 22, -9]

    print(MCSS(tc1))
    # output: 20
    print(MCSS(tc2))
    # output: 61

    print(MCSSWithIndices(tc1))
    # output: {'largestSum': 20, 'largestStartIdx': 1, 'largestEndIdx': 3}
    print(MCSSWithIndices(tc2))
    # output: {'largestSum': 61, 'largestStartIdx': 0, 'largestEndIdx': 5}

def main():
    # Initialize a random vector containing any integer from -10 to 10 with a length of 1000
    vector = [random.randint(-10, 10) for _ in range(1000)]
    # # Print for validation
    # print(vector)

    # # Task 01: Finds the MCSS
    # print(MCSS(vector))
    # # Task 02: Finds the MCSS with start and ending indicies
    # print(MCSSWithIndices(vector))

    print(MCSS([1, 0, -2, 2, 0]))

main()