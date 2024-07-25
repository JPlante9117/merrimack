def divideEvenly(num, denom):
    """
    Given a numerator and a denominator, determines whether the numbers
    divide evenly into one another
    """
    remainder = num % denom

    if (remainder == 0):
        return True
    
    return False

def validateUserInput(uInput):
    """
    Takes the user input and validates that it is not a float, non-positive integer, nor
    unable to be parsed to an integer.
    """
    try:
        intNum = int(float(uInput))
        floatNum = float(uInput)

        if (intNum <= 0):
            raise NonPositiveException()
        elif (intNum - floatNum != 0):
            raise FloatException()
        
        return intNum
    except FloatException:
        print("Float provided, please provide a positive integer.\n")
    except (NonPositiveException, ValueError):
        print("The input provided was not a positive integer.\n")

# The following two Exception Classes allow me to raise specific exceptions when a user provides invalid inputs
class FloatException(Exception):
    """
    To be raised when a user provides a float as their input
    """
    pass

class NonPositiveException(Exception):
    """
    To be raised when a user provides 0 or less as their input
    """
    pass

# Program
print("Give me a numerator and a denominator and I will tell you if they divide evenly!\nMake sure they are positive integers.")
numerator = None
denominator = None
while numerator == None:
    numerator = validateUserInput(input("Provide a positive integer for the numerator: "))

while denominator == None:
    denominator = validateUserInput(input("Provide a positive integer for the denominator: "))

isEven = divideEvenly(numerator, denominator)
print("Do your numbers %s and %s divide evenly?\n%s" % (numerator, denominator, isEven))
    