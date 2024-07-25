import cProfile, random

def merge_sort(arr):
    """
    arr: an array of elements
    output: the same array sorted into ascending order
    """
    if len(arr) <= 1:
        return arr
    
    # Split the array into two halves
    mid = len(arr) // 2
    left_half = arr[:mid]
    right_half = arr[mid:]
    
    # Recursively sort each half
    left_half = merge_sort(left_half)
    right_half = merge_sort(right_half)
    
    # Merge the sorted halves
    merged = []
    left_index, right_index = 0, 0
    
    while left_index < len(left_half) and right_index < len(right_half):
        if left_half[left_index] < right_half[right_index]: # Append the left index if it is smaller than the right index and increment left_index
            merged.append(left_half[left_index])
            left_index += 1
        else: # otherwise append the right index and increment right_index
            merged.append(right_half[right_index])
            right_index += 1
    
    # Append remaining elements from left and right arrays
    merged.extend(left_half[left_index:])
    merged.extend(right_half[right_index:])
    
    return merged

def main1k():
    vector = [i for i in range(1000)]
    random.shuffle(vector)

    merge_sort(vector)

def main2k():
    vector = [i for i in range(2000)]
    random.shuffle(vector)

    merge_sort(vector)

def main5k():
    vector = [i for i in range(5000)]
    random.shuffle(vector)

    merge_sort(vector)

def main10k():
    vector = [i for i in range(10000)]
    random.shuffle(vector)

    merge_sort(vector)

def main25k():
    vector = [i for i in range(25000)]
    random.shuffle(vector)

    merge_sort(vector)

def main50k():
    vector = [i for i in range(50000)]
    random.shuffle(vector)

    merge_sort(vector)

def main100k():
    vector = [i for i in range(100000)]
    random.shuffle(vector)

    merge_sort(vector)

def main250k():
    vector = [i for i in range(250000)]
    random.shuffle(vector)

    merge_sort(vector)

def main500k():
    vector = [i for i in range(500000)]
    random.shuffle(vector)

    merge_sort(vector)

def main1m():
    vector = [i for i in range(1000000)]
    random.shuffle(vector)

    merge_sort(vector)

# Uncomment the cProfile run that you would like to view!
# cProfile.run("main1k()")
# cProfile.run("main2k()")
# cProfile.run("main5k()")
# cProfile.run("main10k()")
# cProfile.run("main25k()")
# cProfile.run("main50k()")
# cProfile.run("main100k()")
# cProfile.run("main250k()")
# cProfile.run("main500k()")
# cProfile.run("main1m()")