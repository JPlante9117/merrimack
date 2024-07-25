def Maximum(A, right):
    print(f"Current Arr: {A}, Right Idx: {right}")
    if (len(A) == 1):
        print(f"I'm left with {A[0]}")
        return A[0]
    

    last = A[right]
    print(f"My right-most item is {last}")
    max_rem = Maximum(A[:right], right - 1)

    print(f"Comparing {last} to {max_rem}")
    if (last > max_rem):
        print(f"{last} is bigger!")
        return last
    else:
        print(f"{max_rem} is bigger!")
        return max_rem

A = [17, 62, 49, 73, 26, 51]
right = len(A) - 1
Maximum(A, right)