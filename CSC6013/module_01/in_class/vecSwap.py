class OutOfBounds(Exception):
    pass

class OddNumber(Exception):
    pass

def vecSwap():
    """Generates a list of indexes with an even length provided by a user within 9 and 21
    then swaps pairs of values next to one another by twos. If there is a remaining value,
    it is not swapped.
    
    For example:
    given a user input 10:
    initial: [0,1,2,3,4,5,6,7,8,9]
    final  : [1,0,3,2,5,4,7,6,9,8]
    """
    u_input = 0
    # Wait for valid user input or KeyboardInterrupt
    while (u_input <= 9 or u_input >= 21):
        try:
            u_input = int(input("Please provide an even integer between 9 and 21: "))
            is_out_of_bounds = u_input <= 9 or u_input >= 21
            is_odd = u_input % 2 != 0

            if (is_out_of_bounds): raise OutOfBounds
            if (is_odd): raise OddNumber
        except OutOfBounds:
            print("Input was out of bounds.")
        except OddNumber:
            print("Input provided was not an even integer.")
            # Reset u_input
            u_input = 0
        except KeyboardInterrupt:
            print("Exiting Program")
            return
        except:
            print("Invalid input.")

    initial_list = [x for x in range(u_input)]
    mutated_list = list(initial_list)
    for n in mutated_list:
        pos1 = n 
        pos2 = n + 1
        items = {mutated_list[pos1], mutated_list[pos2]}
        mutated_list[pos2], mutated_list[pos1] = items
        # Increment to skip the last pos2 value
        n = n + 1

    print(mutated_list)