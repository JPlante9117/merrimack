def binary_digits(n):
    """Calculates the binary of a provided a positive number n
    >>> binary_digits(1)
    1
    >>> binary_digits(2)
    2
    >>> binary_digits(13)
    4
    >>> binary_digits(100)
    7
    >>> binary_digits(-2)

    """
    if (n < 0): # do not handle negative numbers
        return
    # End our recursion if it falls on either 0 or 1
    if n == 0:
        return 1
    if n == 1:
        return 1
    
    # Get our floored binary to go to next and the remainder (our binary to add into our string)
    quotient_fl = n // 2

    
    return 1 + binary_digits(quotient_fl)

def main():
    print(binary_digits(256))
    print(binary_digits(750))

main()