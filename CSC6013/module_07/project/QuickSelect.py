import random

class OutOfBoundsException(Exception):
    pass

def quick_select(A: list[int], l: int, r: int, k: int):
    # Return None if K is too large
    if (k > len(A)):
        return None

    # Set pivot to rightmost, pointer to leftmost
    pivot, pointer = A[r], l

    # Step through range of indexes given left and right
    for i in range(l, r):
        # If current number is smaller or equal to pivot, swap the pointer and the current item
        if (A[i] <= pivot):
            A[pointer], A[i] = A[i], A[pointer]
            pointer += 1

    # At the end, swap the pointer and the rightmost item so that the new pointer index will be sorted
    A[pointer], A[r] = A[r], A[pointer]

    if (k < pointer): # Search left side
        return quick_select(A, l, pointer - 1, k)
    elif (k > pointer): # Search right side
        return quick_select(A, pointer + 1, r, k)
    else: # Found it!
        return A[pointer]

def kth_smallest(A: list[int], k: int):
    # Get the kth smallest
    kth = k - 1
        
    return quick_select(A, 0, len(A) - 1, kth)

def get_suffix(n: int):
    """Takes in an integer n and returns the proper suffix for English"""
    if n % 100 in [11, 12, 13]: # Handle 11ths, 12ths, and 13ths
        return 'th'
    elif n % 10 == 1:
        return 'st'
    elif n % 10 == 2:
        return 'nd'
    elif n % 10 == 3:
        return 'rd'
    else:
        return 'th'

def main():
    A = [random.randint(0, 10000) for _ in range(1000)]
    ui = None
    while not ui:
        try:
            ui = int(input("What is the kth smallest term you want to find? (1 - 1000) "))
            if (ui < 1 or ui > 1000):
                raise OutOfBoundsException
        except OutOfBoundsException:
            print("kth number out of bounds! Must be 1 - 1000.")
            ui = None
        except:
            print("Invalid input")
            ui = None

    num = kth_smallest(A, ui)
    suffix = get_suffix(ui)

    print("Partially Sorted: ", A)
    print(f"The {'' if ui == 1 else str(ui) + suffix} smallest item is {num}")

main()