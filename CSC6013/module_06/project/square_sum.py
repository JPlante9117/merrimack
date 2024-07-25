def square_sum(n):
    """Sums all positive squares from 1 to n
    >>> square_sum(1)
    1
    >>> square_sum(2)
    5
    >>> square_sum(10)
    385
    >>> square_sum(-2)

    """
    # Do not handle negative numbers
    if (n <= 0):
        return
    
    # when n is 1, return 1 (aka 1**2) and break our recursion
    if (n == 1):
        return 1
    
    return n**2 + square_sum(n - 1)

def main():
    print(square_sum(12))
    print(square_sum(20))

main()