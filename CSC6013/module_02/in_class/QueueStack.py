# Class Declarations
class Node:
    def __init__(self, d):
        self.Data = d
        self.Next = None

class LinkedList:
    def __init__(self, d=None):
        if (d == None): # an empty list
            self.Header = None
            self.Current = None
        else:
            self.Header = Node(d)
            self.Current = self.Header
    def nextCurrent(self):
        if (self.Current.Next is not None):
            self.Current = self.Current.Next
        else:
            self.Current = self.Header
    def resetCurrent(self):
        self.Current = self.Header
    def getCurrent(self):
        if (self.Current is not None):
            return self.Current.Data
        else:
            return None
    def insertBeginning(self, d):
        if (self.Header is None): # if list is empty
            self.Header = Node(d)
            self.Current = self.Header
        else:                     # if list not empty
            Tmp = Node(d)
            Tmp.Next = self.Header
            self.Header = Tmp
    def insertCurrentNext(self, d):
        if (self.Header is None): # if list is empty
            self.Header = Node(d)
            self.Current = self.Header
        else:                     # if list not empty
            Tmp = Node(d)
            Tmp.Next = self.Current.Next
            self.Current.Next = Tmp
    def removeBeginning(self):
        if (self.Header is None): # if list is empty
            return None
        else:                     # if list not empty
            ans = self.Header.Data
            self.Header = self.Header.Next
            self.Current = self.Header
            return ans
    def removeCurrentNext(self):
        if (self.Current.Next is None): # if there is no node
            return None                 #        after Current
        else:                           # if there is
            ans = self.Current.Next.Data
            self.Current.Next = self.Current.Next.Next
            return ans
    def printList(self,msg="====="):
        p = self.Header
        print("====",msg)
        while (p is not None):
            print(p.Data, end=" ")
            p = p.Next
        if (self.Current is None):
            print("Empty Linked List")
        print("\n----------------")

class Queue():
    def __init__(self, data=None):
        self.queue: LinkedList = LinkedList(data)
        self.__size = 1 if data else 0

    def enqueue(self, data):
        """Add item to the end of a queue"""
        while self.queue.Current and self.queue.Current.Next:
            self.queue.nextCurrent()
        self.queue.insertCurrentNext(data)
        self.__size = self.__size + 1

    def dequeue(self):
        """Remove item from beginning of Queue"""
        if (self.__size > 0):
            self.queue.removeBeginning()
            self.__size = self.__size - 1

    def get_size(self):
        """Returns the size of our Queue"""
        return self.__size

    def print(self):
        """Calls the LinkedList print function"""
        self.queue.printList()

class Stack:
    def __init__(self, data=None):
        if (data == None):
            self.stack = []
        else:
            self.stack = [data]
    
    def add(self, data):
        self.stack.append(data)

    def remove(self):
        if (len(self.stack)):
            self.stack.pop()

    def get_size(self):
        return len(self.stack)
    
    def print(self, msg="====="):
        print("====",msg)
        if (self.get_size() > 0):
            for n in self.stack:
                print(n, end=" ")
        else:
            print("Empty Stack")
        print("\n----------------")

# Program
def main():
    # Initialize Queue and Stack
    q = Queue()
    s = Stack()

    # Get Input of positive numbers to add to queue and stack
    while True:
        try:
            u_input = int(input("Enter a positive number. Entering 0 or less will stop the inquiry for more numbers: "))

            if (u_input < 1):
                break
            else:
                q.enqueue(u_input)
                s.add(u_input)
        except KeyboardInterrupt:
            break
        except:
            print("Invalid input.")

    # Remove two items if there are two or more available to remove
    q_size = q.get_size()
    s_size = s.get_size()

    if (q_size >= 2 and s_size >= 2):
        print("Removing Two Elements from Queue and Stack...")
        q.dequeue()
        q.dequeue()
        s.remove()
        s.remove()

    # Print the remaining Queue Items
    print("The Queue now contains: ")
    q.print()
    print("The Stack now contains: ")
    s.print()

main()