def tribonacci(n):
    # until we get to the 4th term, they will be 1
    if (n < 4):
        return 1
    
    # instantiate placeholder vars
    a, b, c = 1, 1, 1

    # Do 3 to n times...
    for i in range(3, n):
        # a becomes b, b becomes c, and c becomes the sum of the three, thus moving us along the tribonacci sequence
        a, b, c = b, c, a + b + c
    
    # gives us our nth term
    return c

def main():
    u_input = None
    while (u_input is None or u_input > 0):
        try:
            u_input = int(input("Provide a positive integer n to find the nth term of a Tribonacci sequence.\nEnter a number less than 1 to exit: "))

            # Stop program if u_input is less than 1
            if (u_input < 1): break
            
            # Print out nth term asked for by user
            tribo = tribonacci(u_input)
            print(f"The nth term of {u_input} in the Tribonacci sequence is {tribo}")
        except:
            print("Invalid Input")

main()