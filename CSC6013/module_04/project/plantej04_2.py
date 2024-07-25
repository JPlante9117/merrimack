type RealList = list[int,float]

def find_smallest_gap(arr: RealList) -> int|float:
    """Takes in an array of real numbers and returns the smallest gap between any two numbers.

    Time Complexity: O(n**2)
    
    DOCTESTS
    >>> find_smallest_gap([50, 120, 250, 100, 20, 300, 200])
    20
    >>> find_smallest_gap([12.4, 45.9, 8.1, 79.8, -13.64, 5.09])
    3.01
    """
    smallest_gap = None
    for i in range(len(arr)):
        for j in range(i, len(arr)):
            if (j <= i):
                continue
            first = arr[i]
            next = arr[j]
            current_gap = abs(first - next)
            
            if (smallest_gap == None or smallest_gap > current_gap):
                smallest_gap = current_gap

    return smallest_gap

def main():
    find_smallest_gap([50, 120, 250, 100, 20, 300, 200])
    find_smallest_gap([12.4, 45.9, 8.1, 79.8, -13.64, 5.09])

main()