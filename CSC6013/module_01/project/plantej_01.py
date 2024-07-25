# Node and LinkedList from class

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
        if (self.Current is not None):
            print("Current:", self.Current.Data)
        else:
            print("Empty Linked List")
        print("----------------")

# Helper functions
def file_to_arr() -> list:
    """Reads a file that has 1 number per line and adds them into an array"""
    file = open('data.txt', 'r')
    arr = []
    while True:
        line = file.readline()
        if (not line):
            break
        arr.append(int(line))

    return arr

def convert_sorted_arr_to_linked_list(arr: list) -> LinkedList:
    """Takes a sorted array and creates a LinkedList from its values"""
    L = LinkedList()
    for n in arr:
        if L.Header is not None:
            # Traverse the LinkedList until we are at the end, then insert the new value
            while L.Current.Next is not None:
                L.Current = L.Current.Next
            L.insertCurrentNext(n)
        else:
            # Insert the first value into the LinkedList
            L.insertBeginning(n)

    # Reset the Current so we are pointing at the Header to start
    L.resetCurrent()

    return L

# Program
def main():
    a = file_to_arr()
    a.sort()
    L = convert_sorted_arr_to_linked_list(a)

    while True:
        try:
            x = int(input("Please provide an integer to add or remove from the Linked List: "))
            break
        except:
            print("Invalid input")

    # Check Header Node
    if (x < L.Header.Data):
        L.insertBeginning(x)
    elif (x is L.Header.Data):
        L.removeBeginning()
    else:
        match_found = False
        can_insert = False

        while not match_found and not can_insert:
            current: Node = L.Current
            next: Node = current.Next
            if (next is None):
                # If we are at the end, that means this is the largest value.
                can_insert = True
            elif (next.Data is x):
                # If the next would be the provided input, we found a match
                match_found = True
            elif (next.Data > x):
                # If the next would be larger than the provided input, we can insert it
                can_insert = True
            
            if (can_insert):
                L.insertCurrentNext(x)
            elif (match_found):
                L.removeCurrentNext()
            else:
                # If no match was found and no insertion point was found, step to the next node
                L.nextCurrent()

    L.printList()

main()