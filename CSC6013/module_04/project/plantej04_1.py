type IntList = list[int]

def find_divisible_count(arr: IntList, divisor: int) -> int:
    """Takes two arguments: an integer list (arr) and a positive integer (divisor)
    and returns the number of entries in the list that are divisible by the divisor (int)

    Time Complexity: O(n)

    DOCTESTS
    >>> find_divisible_count([20,21,25,28,33,34,35,36,41,42], 7)
    4
    >>> find_divisible_count([18,54,76,81,36,48,99], 9)
    5
    """
    is_divisible_count: int = 0
    for num in arr:
        if (isinstance(num, int) and num % divisor == 0):
            is_divisible_count = is_divisible_count + 1

    return is_divisible_count

def main():
    find_divisible_count([20,21,25,28,33,34,35,36,41,42], 7)
    find_divisible_count([18,54,76,81,36,48,99], 9)

main()