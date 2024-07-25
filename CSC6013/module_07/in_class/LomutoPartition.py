def LomutoPartition(A, left, right):
    pivot = A[right]  # Choosing the last element as pivot
    i = left  # Index of smaller element
    print(f"Initial Array: {A}")
    print(f"Pivot: {pivot}")
    print(f"Elements yet to compare: {A[left:right]}")

    for j in range(left, right):
        print(f"For i = {i} and j = {j},")
        if A[j] < pivot:
            A[i], A[j] = A[j], A[i]  # Swap A[i] and A[j]
            print("   ", "Swap made: A[i] =", A[i], "A[j] =", A[j])
            print("   ", "Elements lesser than the pivot:", A[left:i+1])
            print("   ", "Elements greater than the pivot:", A[i+1:right])
            print("   ", "Elements yet to compare:", A[j+1:right])
            i += 1
        else:
            print("   ", "No swap made: A[i] =", A[i], "A[j] =", A[j])
            print("   ", "Elements lesser than the pivot:", A[left:i])
            print("   ", "Elements greater than the pivot:", A[i+1:right])
            print("   ", "Elements yet to compare:", A[j+1:right])
        print('\n')

    A[i], A[right] = A[right], A[i]  # Swap A[i+1] and A[right] (pivot)

    return i

def main():
    A = [100, 33, 22, 213, 65, 29, 153, 199, 47, 181, 85]
    LomutoPartition(A, 0, 10)

    print(f"Final result: {A}")

main()