from math import log2
import random

def hillClimb(arr, start_index):
    """
    The following test cases evaluate a slew of expected outputs based on certain scenarios.
    Those scenarios include
    - Empty Lists and Out-of-Bounds starting indexes
    - Single item lists
    - Starting at beginning or end of list
    - Always increasing/decreasing lists
    - Plateaus as local maximums
    - All plateaus
    - Equadistant Pit
    - Lopsided Pit
    - Mixture of shoulders and single peak
    - Mixture of shoulders and multiple peaks
    - Starting on a peak
    Test Cases:
    >>> hillClimb([],0)
    (None, None)
    >>> hillClimb([0,1,2],5)
    (None, None)
    >>> hillClimb([1],0)
    (0, 1)
    >>> hillClimb([0,1,2],0)
    (2, 2)
    >>> hillClimb([2,1,0],0)
    (0, 2)
    >>> hillClimb([0,1,2],2)
    (2, 2)
    >>> hillClimb([2,1,0],2)
    (0, 2)
    >>> hillClimb([0,2,2,2,1,0],5)
    (1, 2)
    >>> hillClimb([0,2,2,2,1,0],0)
    (3, 2)
    >>> hillClimb([0,1,2,3,4,5],2)
    (5, 5)
    >>> hillClimb([5,4,3,2,1],2)
    (0, 5)
    >>> hillClimb([1,1,1,1,1],2)
    (4, 1)
    >>> hillClimb([3,2,1,2,3,4],2)
    (5, 4)
    >>> hillClimb([3,1,2,3,4,5],1)
    (0, 3)
    >>> hillClimb([1,2,3,2,1],2)
    (2, 3)
    >>> hillClimb([1,2,3,2,1,4,6,7],2)
    (2, 3)
    >>> hillClimb([1,2,3,3,3,4,5,4,3,3,2],1)
    (6, 5)
    >>> hillClimb([1,2,3,3,3,4,5,4,3,3,2],10)
    (6, 5)
    >>> hillClimb([1,2,3,3,3,4,5,4,6,3,3,2],1)
    (6, 5)
    >>> hillClimb([1,2,3,3,3,4,5,4,6,3,3,2],11)
    (8, 6)
    """
    local_maximum_index = None
    current_index = start_index

    # Handle empty list or out-of-bounds starting index
    if (not arr or start_index > len(arr) - 1):
        return None, None
    # Handle len 1 arrays quickly
    if (len(arr) == 1):
        return 0, arr[0]
    
    direction = None
    
    while True:
        left_idx = current_index - 1
        right_idx = current_index + 1
        at_left_end = left_idx < 0
        at_right_end = right_idx > len(arr) - 1

        # No more items to check after this iteration...
        if ((at_left_end and direction == 'l') or (at_right_end and direction == 'r')):
            # We hit the end, so we must be at a maximum if we didn't break any other iteration
            local_maximum_index = current_index
            break

        # At the left end or the direction we are looking is to the right...
        if (at_left_end or direction == 'r'):
            direction = 'r'
            current_item, right_item = arr[current_index], arr[right_idx]
            # If the next item is either the same or greater, move our current index and restart loop
            if ((current_item < right_item) or current_item == right_item):
                current_index = right_idx
                continue
            # If next item is smaller, we found the local max
            elif (current_item > right_item):
                local_maximum_index = current_index
                break
        # At the right end or the direction we are looking is the left...
        elif (at_right_end or direction == 'l'):
            direction = 'l'
            current_item, left_item = arr[current_index], arr[left_idx]
            # If the next item is either the same or greater, move our current index and restart loop
            if ((current_item < left_item) or current_item == left_item):
                current_index = left_idx
                continue
            # If the next item is smaller, we found the local max
            elif (current_item > left_item):
                local_maximum_index = current_index
                break
        # No direction determined yet
        else:
            left_item = arr[left_idx]
            right_item = arr[right_idx]
            current_item = arr[current_index]

            # Items are not equadistant, but right diff is greater or equal to left diff
            item_diff_leans_right = left_item - current_item <= right_item - current_item
            # If left is smaller and right is equal or bigger, or we are leaning right, or we are equadistant
            at_peak = left_item < current_item and right_item < current_item
            heading_right = not at_peak and ((left_item < current_item and current_item <= right_item) or item_diff_leans_right)

            if (at_peak):
                local_maximum_index = current_index
                break
            elif (heading_right):
                direction = 'r'
                current_index = right_idx
                continue
            else:
                direction = 'l'
                current_index = left_idx
                continue

    return local_maximum_index, arr[local_maximum_index]

def myFunction(x):
    if (x == 0):
        return 0
    elif ((log2(x) * 7) % 17) < (x % 13):
        return (x + log2(x))**3
    elif ((log2(x) * 5) % 23) < (x % 19):
        return (log2(x) * 2)**3
    else:
        return (log2(x)**2) - x


def main():
    arr = []
    for n in range(10000):
        num = myFunction(n)
        arr.append(num)

    # Monte Carlo Implementation
    limit = 1000
    tries = 0
    local_max = None
    python_max = max(arr)
    for i in range(limit):
        tries += 1
        start_index = random.randint(1, 9998)
        this_max_index, this_max = hillClimb(arr, start_index)
        
        if (not local_max or this_max > local_max):
            local_max = this_max

        if (local_max == python_max):
            break

    if (local_max == python_max):
        print(f"After {tries} {'try' if tries == 1 else 'tries'}, the greatest local maximum discovered was {local_max} which was the global maximum")
    else:
        print(f"After {tries} {'try' if tries == 1 else 'tries'}, the greatest local maximum discovered was {local_max}. The actual global maximum was {python_max}")
        
main()