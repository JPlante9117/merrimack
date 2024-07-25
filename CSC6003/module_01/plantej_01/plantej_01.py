import math, sys

# Global Variable for Pi
pi = math.pi

# Calculation for Circumference of Circle
def calculateCircumference(radius):
    global pi

    return 2 * pi * radius

# Calculation for Area of Circle
def calculateArea(radius):
    global pi

    return pi * radius ** 2

# Calculation for Volume of Sphere
def calculateVolume(radius):
    global pi

    return (4/3) * pi * radius ** 3

# Interactive Start:
print("Please enter an integer, float, or \"pi\" for a radius of a circle or sphere:")

try:
    # Loop until the user provides proper input
    while True:
        radius = input()
        try:
            # Get the number for the radius from user input
            if (radius == "pi"):
                parsedRadius = pi
            else:
                parsedRadius = float(radius)

            # Calculate the results
            circumference = calculateCircumference(parsedRadius)
            area = calculateArea(parsedRadius)
            volume = calculateVolume(parsedRadius)

            # Print the messages
            print("The circumference of a circle with a radius of %s is %s" % (parsedRadius, circumference))
            print("The area of a circle with a radius of %s is %s" % (parsedRadius, area))
            print("The volume of a sphere with a radius of %s is %s" % (parsedRadius, volume))

            # End the while loop, which will end the program
            break
        except:
            # if the user provided a non-integer, non-float, or didn't use "pi", prompt them to update their answer
            print("Invalid value for radius. Please enter an integer, float, or 'pi'.")
except KeyboardInterrupt:
    # Allow for keyboard interrupt exit without error
    sys.exit()