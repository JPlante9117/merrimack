import random

# Task 1
def vegas(arr):
    found = False
    index = None
    tries = 0
    # Do not break until we find a 1
    while not found:
        tries += 1
        idx = random.randint(0, len(arr) - 1)
        item = arr[idx]
        if (item == 1):
            index = idx
            found = True

    print(f"Found a one at index {index} after {tries} tries")

# Task 2
def monte_carlo(arr, k):
    index = None
    tries = 0
    # Iterate a maximum of k times
    for i in range(k):
        tries += 1
        idx = random.randint(0, len(arr) - 1)
        item = arr[idx]
        # If we found a 1, capture the index and break
        if (item == 1):
            index = idx
            break

    if (index):
        print(f"Found a one at index {index} after {tries} tries")
    else:
        print(f"Did not find a one after {tries} tries")


def main():
    # Create the 10,000 index array of equal 1s and 0s
    zeroes = [0 for i in range(5000)]
    ones   = [1 for i in range(5000)]
    mix    = zeroes + ones
    # Shuffle it
    random.shuffle(mix)

    # Vegas
    print("Vegas Algorithm:")
    vegas(mix)
    print("\n")
    # Monte Carlo
    print("Monte Carlo Algorithm:")
    monte_carlo(mix, 10)

main()