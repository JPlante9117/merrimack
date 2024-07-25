
# class Node
#
# Instance variables:
#    Data - the value
#    Next - the next node

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
        input("----------------")
    def swapNext(self):
        if self.Current and self.Current.Next is not None:
            current_node = self.Current
            next_node = self.Current.Next
            second_next_node = next_node.Next
            prev_node = self.Header

            if current_node is self.Header:
                current_node.Next = second_next_node
                next_node.Next = current_node
                self.Header = next_node
                self.resetCurrent()
            else:
                while prev_node.Next != current_node:
                    prev_node = prev_node.Next

                prev_node.Next = next_node
                next_node.Next = current_node
                current_node.Next = second_next_node
                self.resetCurrent()
                while self.Current != next_node:
                    self.nextCurrent()

            return 0
        else:
            return -1

def main():
    mylist = LinkedList()
    mylist.insertBeginning(20)
    mylist.insertCurrentNext(40)
    mylist.insertCurrentNext(50)
    mylist.insertCurrentNext(60)
    mylist.insertCurrentNext(70)
    print(mylist.swapNext())
    # mylist.printList()
    # mylist.swapNext()
    # mylist.printList()
    # mylist.nextCurrent()
    # mylist.printList()
    # mylist.swapNext()
    # mylist.printList()


main()