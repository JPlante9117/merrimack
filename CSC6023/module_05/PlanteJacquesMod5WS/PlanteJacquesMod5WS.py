from random import randrange

def test(initialSize, probRemove):
    accCheap, accCosty = 0, 0
    s = initialSize
    m = 2*s
    for i in range(100000):
        if (randrange(100) < probRemove):
            if (s > 0):
                s -= 1
        else:
            if (s == m):
                m = m*2
                s += 1
                accCosty += 1
            else:
                s += 1
                accCheap += 1
    print("Initial size:", initialSize, "Prob Remove:", probRemove, "out of 100")
    # Updated format here to be more readable for myself, now showing out of 100% rather than out of 1%
    print("Costy: {:7} ({:.2f}%)".format(accCosty,accCosty/(accCosty+accCheap)*100))
    print("Cheap: {:7} ({:.2f}%)".format(accCheap,accCheap/(accCosty+accCheap)*100))

def main():
    """Test scenario that results in 99% costly

    This is due to the fact that m can never increase combined with 99% chance that s decreases on each pass.
    This causes line 12 to be true most of the time when we get to it.
    """
    test(0, 99)

    # Test scenario that occasionally results in ~33% costly
    test(0, 60)

    # Test scenarios that occasionally results in 1% costly
    test(0, 50)
    test(0, 40)

    """
    Notice how above, all test scenarios that result costlier occurrances have initial sizes of 0.
    Increasing the initial size ABOVE 0 will cause m to outscale s at a very quick pace, which results in 
    < 1% costly iterations.
    """

    # test scenario that results in ~0.01% costly
    test(10, 50)

    """ Test scenario that results in 0% costly based on this program
    This results in 0% because in 100,000 passes, s scales so slowly that roughly only 5 times will it ever be the same value as m.
    """
    test(10000, 1)

main()