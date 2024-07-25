# Program

def calculate_area_of_rectangle(length: int|float, width: int|float):
    """This function caluclates and returns the area of a rectangle rounded
    to two decimal places provided a length and width value.

    :param int|float length: length of a rectangle
    :param int|float width: width of a rectangle

    :return float: area of a rectangle

    ## Test Cases Using doctest

    >>> calculate_area_of_rectangle(4, 5)
    20.0

    >>> calculate_area_of_rectangle(30.5, 2)
    61.0

    >>> calculate_area_of_rectangle(3.14, 10)
    31.4

    >>> calculate_area_of_rectangle(4, 4)
    16.0

    #### This should fail since we return a float, not an int
    >>> calculate_area_of_rectangle(4, 4)
    16
    """
    return round(float(length * width), 2)