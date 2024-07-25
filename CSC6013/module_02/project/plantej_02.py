# Class Definitions

# Person class seen in Live Session
# modified to take nicknames directly, and added printPerson method
class Person:
    def __init__(self, name, familyName, age, nickname):
        self.name  = name
        self.famN  = familyName
        self.age   = age
        self.nName = nickname
    def getName(self):
        return self.name
    def getNickName(self):
        return self.nName
    def getFullName(self):
        return self.name+" "+self.famN
    def getFamilyName(self):
        return self.famN
    def getAge(self):
        return self.age
    def printPerson(self):
        print("{1}, also known as {0}; aged {2}".format(self.getNickName(), self.getFullName(), self.getAge()))
    
# Custom Stack class using Python Lists (seen also in my in-class assignment)
# modified to add read_top method
class Stack:
    def __init__(self, data=None):
        if (data == None):
            self.stack = []
        else:
            self.stack = [data]
    
    def add(self, data):
        self.stack.append(data)

    def read_top(self):
        if (self.get_size() > 0):
            return self.stack[-1]

    def remove(self):
        if (len(self.stack)):
            self.stack.pop()

    def get_size(self):
        return len(self.stack)

# Custom Named Exception to help print proper message to user on improper input
class OutOfBounds(Exception):
    pass

# Helper Functions
def readPeople(fileName):
    infile = open(fileName, "r")
    people = Stack()
    for line in infile:
        info = line.split(",")
        people.add(Person(info[1], info[2], int(info[3]),info[0]))
    return people

# Program
def main():
    fileName = "people.csv"
    peopleStack = readPeople(fileName)

    # Continue prompting until the stack is empty
    while peopleStack.get_size() > 0:
        # Reset the success and u_input
        success = False
        u_input = 0
        try:
            u_input = int(input("Enter a number 1 - 4: "))
            # Validate user input is within bounds
            if (u_input > 4 or u_input < 1): 
                raise OutOfBounds
            # Mark success for the bottom section
            success = True
        except OutOfBounds:
            print("Input out of bounds.")
        except KeyboardInterrupt:
            break
        except:
            print("Invalid input.")
        
        # If our try block succeeded, do the following
        if (success):
            print(f"Removing {u_input} item{'s' if u_input > 1 else ''} from the stack.")
            # Remove u_input amount of items from the stack
            for n in range(u_input):
                peopleStack.remove()
            # Read the top item of the stack without removing it
            topPerson:Person = peopleStack.read_top()
            # If that Person exists, display it
            if (topPerson):
                print("The next Person on the stack is:")
                topPerson.printPerson()

    # End the program when the stack is empty
    print("The stack is now empty.")

main()