""" This file contains the Stack class.
 It is a simple version of the stack data structure where we can do the following:
  - Initialize the Stack with or without data
  - Add data onto the Stack
  - Read from the top of the Stack
  - Remove data from the Stack
  - Get the size of the Stack """

class Stack:
    """ This class defines a simplified Stack data structure.
    It has a single variable called 'stack' as an array holding the data. """
    def __init__(self, d=None):
        """ The constructor of the Stack that either:
        - creates an empty Stack
        - creates a Stack with data d stored inside """
        if (d == None):
            self.stack = []
        else:
            self.stack = [d]
    
    def add(self, data):
        """ Adds the provided data to the top of the Stack """
        self.stack.append(data)

    def read_top(self):
        """ Returns the top item of the Stack, if any """
        if (self.get_size() > 0):
            return self.stack[-1]

    def remove(self):
        """ Removes and returns the top item of the Stack, if any """
        if (len(self.stack)):
            return self.stack.pop()

    def get_size(self):
        """ Returns the number of items in the Stack """
        return len(self.stack)

# File Doc
print(__doc__)
# Class Doc
print(Stack.__doc__)
# Constructor Doc
print(Stack.__init__.__doc__)
# Class Method Doc example
print(Stack.remove.__doc__)
