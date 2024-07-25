from random import randrange

class OOBError(Exception):
    pass

class DoubleArrayQueue:
    def __init__(self):
        self.a_in = []
        self.a_out = []
        self.cheap = 0
        self.costly = 0

    def enqueue(self, n):
        # Add in!
        self.cheap += 1
        self.a_in.append(n)

    def dequeue(self):
        if (self.a_out == []):
            # Swap the in to the out
            self.costly += 1
            for n in self.a_in:
                self.a_out.append(n)
            self.a_in = []

        if (self.a_out != []):
            # Pop!
            self.cheap += 1
            return self.a_out.pop(0)
    
def main():
    double_queue = DoubleArrayQueue()
    enqueue_prob = None
    while not enqueue_prob:
        try:
            # Get user input for enqueue probability
            enqueue_prob = int(input("What is the probablity of an enqueue happening? (Should be between 33 and 67) "))

            if (enqueue_prob < 33 or enqueue_prob > 67):
                raise OOBError
        except OOBError:
            # A number < 33 or > 67 was provided
            print("Provided input out of bounds...")
            enqueue_prob = None
        except KeyboardInterrupt:
            # Exit the program.
            return
        except:
            # Some other bad input was provided
            print("Invalid input...")
            enqueue_prob = None

    # Do 100,000 operations...
    for i in range(100000):
        if (randrange(100) < enqueue_prob): # If it's under the enqueue probability provided, do an enqueue operation
            double_queue.enqueue(i)
        else: # Otherwise do a dequeue operation
            double_queue.dequeue()

    # Calculate the costly vs cheap operations
    cheap_ops, costly_ops = double_queue.cheap, double_queue.costly
    cheap_pct, costly_pct = 100 * cheap_ops/(cheap_ops+costly_ops), 100 * costly_ops/(cheap_ops+costly_ops)

    print(f"The double queue had {cheap_ops} cheap operations taking up {cheap_pct:.2f}% of the total operations.")
    print(f"The double queue had {costly_ops} costly operations taking up {costly_pct:.2f}% of the total operations.")

main()