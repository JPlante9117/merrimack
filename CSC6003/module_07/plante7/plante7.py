"""
1. Are you able to create a large number of random numbers and keep them in a list?
1a. Yes, by using [random.random() for _ in range(x)]

2. Can you feed this list to any two sorting functions (you can/should use the ones provided)?
2a. Yes, I feed them through the provided insertion sort and merge sort algorithms

3. Did you add the time stamps to determine when you are about the call the sorting function(s) and when you finish determining the time (in milliseconds) it took to sort the data?
3a. Yes, though for some of the algorithms, I needed to use nanoseconds to see a difference on my machine.

4. Are you able to determine which algorithm is better?
4a. Yes, overall it seemed merge_sort was more performant.

5. Can you describe, in your own words, (in less than 3 lines!), which algorithm is more efficient?
5a. In the following code, we test random integers in a 20, 200, 2,000, and 20,000 length arrays being
sorted via insertion and merge. Additionally, we also test an already sorted 20,000 length array.
Merge was more efficient in almost all cases, with the exceptions of a pre-sorted array and the
smallest array.
"""

# merge sort and insertion sort

import random
from insertionsort import insertion_sort
from mergesort import merge_sort
import time

from datetime import datetime

# time in milliseconds
def snapshot_time_ms():
    dt = datetime.now()
    ts = datetime.timestamp(dt) * 1000

    return ts

# Time in Nanoseconds
def snapshot_time_ns():
    return time.time_ns()

s1 = random.seed(1)
arr1 = [random.random() for _ in range(200)]
arr2 = [random.random() for _ in range(2000)]
arr3 = [random.random() for _ in range(20000)]
arr4 = [random.random() for _ in range(20)]
arr5 = [_ for _ in range(20000)]

# 20 length
print("For a random 20 item array...")
before_insertion = snapshot_time_ns()
insertion_sort(arr4)
after_insertion = snapshot_time_ns()
insertion_diff = after_insertion - before_insertion
print("Insertion Sort took %d ns" % insertion_diff)

before_merge = snapshot_time_ns()
merge_sort(arr4)
after_merge = snapshot_time_ns()
merge_diff = after_merge - before_merge
print("Merge Sort took %d ns" % merge_diff)

if (insertion_diff < merge_diff):
    print("insertion was faster by %d ns" % (merge_diff - insertion_diff))
else:
    print("merge was faster by %d ns" % (insertion_diff - merge_diff))

# 200 length
print("\nFor a random 200 item array...")
before_insertion = snapshot_time_ns()
insertion_sort(arr1)
after_insertion = snapshot_time_ns()
insertion_diff = after_insertion - before_insertion
print("Insertion Sort took %d ns" % insertion_diff)

before_merge = snapshot_time_ns()
merge_sort(arr1)
after_merge = snapshot_time_ns()
merge_diff = after_merge - before_merge
print("Merge Sort took %d ns" % merge_diff)

if (insertion_diff < merge_diff):
    print("insertion was faster by %d ns" % (merge_diff - insertion_diff))
else:
    print("merge was faster by %d ns" % (insertion_diff - merge_diff))


# 2,000 length
print("\nFor a random 2,000 item array...")
before_insertion = snapshot_time_ms()
insertion_sort(arr2)
after_insertion = snapshot_time_ms()
insertion_diff = after_insertion - before_insertion
print("Insertion Sort took %d ms" % insertion_diff)

before_merge = snapshot_time_ms()
merge_sort(arr2)
after_merge = snapshot_time_ms()
merge_diff = after_merge - before_merge
print("Merge Sort took %d ms" % merge_diff)

if (insertion_diff < merge_diff):
    print("insertion was faster by %d ms" % (merge_diff - insertion_diff))
else:
    print("merge was faster by %d ms" % (insertion_diff - merge_diff))



# 20,000 length
print("\nFor a random 20,000 item array...")
before_insertion = snapshot_time_ms()
insertion_sort(arr3)
after_insertion = snapshot_time_ms()
insertion_diff = after_insertion - before_insertion
print("Insertion Sort took %d ms" % insertion_diff)

before_merge = snapshot_time_ms()
merge_sort(arr3)
after_merge = snapshot_time_ms()
merge_diff = after_merge - before_merge
print("Merge Sort took %d ms" % merge_diff)

if (insertion_diff < merge_diff):
    print("insertion was faster by %d ms" % (merge_diff - insertion_diff))
else:
    print("merge was faster by %d ms" % (insertion_diff - merge_diff))


# 20,000 length sorted
print("\nFor a SORTED 20,000 item array...")
before_insertion = snapshot_time_ns()
insertion_sort(arr5)
after_insertion = snapshot_time_ns()
insertion_diff = after_insertion - before_insertion
print("Insertion Sort took %d ns" % insertion_diff)

before_merge = snapshot_time_ns()
merge_sort(arr5)
after_merge = snapshot_time_ns()
merge_diff = after_merge - before_merge
print("Merge Sort took %d ns" % merge_diff)

if (insertion_diff < merge_diff):
    print("insertion was faster by %d ns" % (merge_diff - insertion_diff))
else:
    print("merge was faster by %d ns" % (insertion_diff - merge_diff))
