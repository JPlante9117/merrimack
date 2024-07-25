def bubble_sort(A):
    """Takes in a number list A and sorts it via bubble sort by passing largest numbers to the end of the list"""
    # instantiate totals
    total_compared = 0
    total_swapped = 0
    for i in range(len(A) - 1):
        # instantiate iteration vars
        items_compared = 0
        items_swapped = 0
        for j in range(len(A) - i - 1):
            # increment item comparison
            items_compared += 1
            if (A[j] > A[j + 1]):
                # if current is larger than next, increment swaps and swap  them
                items_swapped += 1
                A[j], A[j + 1] = A[j + 1], A[j]

        # add to totals
        total_compared += items_compared
        total_swapped += items_swapped

        # print current status
        print("Current Iteration: {}".format(A))
        print("Comparisons: {}".format(items_compared))
        print("Swaps: {}".format(items_swapped))

        # early exit if no swaps happened
        if (items_swapped == 0):
            break

    # print final adjustments
    print("_" * 10)
    print("\nTotal Comparisons: {}".format(total_compared))
    print("Total Swaps: {}".format(total_swapped))

def main():
    A4 = [44, 63, 77, 17, 20, 99, 84, 6, 39, 52]
    A5 = [52, 84, 6, 39, 20, 77, 17, 99, 44, 63]
    A6 = [6, 17, 20, 39, 44, 52, 63, 77, 84, 99]

    bubble_sort(A4)
    bubble_sort(A5)
    bubble_sort(A6)


main()