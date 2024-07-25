def power(x, p):
    """takes in a number x and a positive number p and multiplies x by itself p times"""
    # do not accept negative p
    if (p < 0):
        print("Function does not handle negative p")
        return

    # start total at 1, as when p is 0 we return 1 and 1 does not alter x when multiplied
    total = 1
    for _ in range(p):
        # multiply total by x p times
        total = total * x

    return total

def evaluate(A, x):
    """Takes in a list of numbers A and a value for the multiplicitive variable x.
    Evaluates a polynomial based on index of A to determine the power of x"""
    # instantiate totals at 0
    total = 0
    for index, item in enumerate(A):
        # add current item times x to the power of the current index to the total
        total += item * power(x, index)

    return total

def main():
    evaluate([12.3, 40.7, -9.1, 7.7, 6.4, 0, 8.9], 5.4)

main()