def selection_sort(A):
    """Takes in a list of numbers A and sorts it via selection sort by sorting max items to the end"""
    for i in range(len(A)):
        # instantiate comparison/swap/index
        items_compared = 0
        items_swapped = 0
        max_index = 0
        for j in range(1, len(A) - i):
            # increment comparison
            items_compared += 1
            if (A[j] > A[max_index]):
                # increment max_index if current is larger than last largest
                max_index = j

        last_unsorted = len(A) - i - 1
        if (last_unsorted != max_index):
            # increment swaps if the last unsorted is not the max_index
            items_swapped += 1
        # swap max item to the end
        A[last_unsorted], A[max_index] = A[max_index], A[last_unsorted]
        # print out current status
        print("Current Iteration: {}".format(A))
        print("Comparisons: {}".format(items_compared))
        print("Swaps: {}".format(items_swapped))

def main():
    A1 = [63, 44, 17, 77, 20, 6, 99, 84, 52, 39]
    A2 = [84, 52, 39, 6, 20, 17, 77, 99, 63, 44]
    A3 = [99, 84, 77, 63, 52, 44, 39, 20, 17, 6]

    selection_sort(A1)
    selection_sort(A2)
    selection_sort(A3)


main()