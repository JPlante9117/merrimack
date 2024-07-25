def zigzag(a: int, b: int, c: int):
    """Determines whether or not the set of three numbers passed form a 'zigzag' where b is the vertex.
    
    Example tests:
    >>> zigzag(1,2,3)
    False
    >>> zigzag(3,2,1)
    False
    >>> zigzag(1,3,2)
    True
    >>> zigzag(2,1,3)
    True
    >>> zigzag(1,2,2)
    False
    >>> zigzag(1,1,2)
    False
    >>> zigzag(1,1,1)
    False
    """
    b_is_biggest = b > a and b > c
    b_is_smallest = b < a and b < c

    if (b_is_biggest or b_is_smallest):
        return True
    
    return False