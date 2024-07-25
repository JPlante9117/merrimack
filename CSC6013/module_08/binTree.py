
class Node:
    def __init__(self, d):
        self.Data, self.Left, self.Right = d, None, None

class Tree:
    def __init__(self, d=None):
        if (d == None): # an empty tree
            self.Root = None
        else:
            self.Root = Node(d)
    def insert(self, d):
        def __insertHere__(n, d):
            if (n.Data > d):   # if no node left insert here
                if (n.Left == None):
                    n.Left = Node(d)
                else:          # or try left child
                    __insertHere__(n.Left, d)
            elif (n.Data < d): # if no node right insert here
                if (n.Right == None):
                    n.Right = Node(d)
                else:          # or try right child
                    __insertHere__(n.Right, d)
        if (self.Root == None): # it was an empty tree
            self.Root = Node(d)
        else:
            if (self.Root.Data > d):          # try left child
                if (self.Root.Left == None):  # if empty insert here
                    self.Root.Left = Node(d)
                else:                         # try left subtree
                    __insertHere__(self.Root.Left, d)
            elif (self.Root.Data < d):        # try right child
                if (self.Root.Right == None): # if empty insert here
                    self.Root.Right = Node(d)
                else:                         # try right subtree
                    __insertHere__(self.Root.Right, d)
    def check(self, d):
        def __check__(n, d):
            if (n == None):
                return False
            elif (n.Data == d):
                return True
            elif (n.Data > d):
                return __check__(n.Left, d)
            elif (n.Data < d):
                return __check__(n.Right, d)
        return __check__(self.Root, d)
    def printInorder(self):
        def __visit__(n):
            if (n != None):
                __visit__(n.Left)
                print(n.Data, end=" ")
                __visit__(n.Right)
        print("\n--------")
        __visit__(self.Root)
        print("\n--------")
    def printPreorder(self):
        def __visit__(n, h):
            if (n != None):
                print("---"*h, n.Data)
                __visit__(n.Left, h+1)
                __visit__(n.Right, h+1)
        print("^^^^^^^^^^")
        __visit__(self.Root, 1)
        print("^^^^^^^^^^")
    def printPostorder(self):
        def __visit__(n, h):
            if (n != None):
                __visit__(n.Left, h+1)
                __visit__(n.Right, h+1)
                print("---"*h, n.Data)
        print("==========")
        __visit__(self.Root, 1)
        print("==========")
    def inorder_rank(self, num):
        # ...Tree Method
        # Variables capable of permeating iterations
        self.InOrderDepth = 0
        self.FoundDepth = False

        # Modified copy of inorder visit
        def __visit__(n):
            if (n != None):
                if (not self.FoundDepth):
                    __visit__(n.Left)
                    if (n.Data == num):
                        self.FoundDepth = True
                    if (not self.FoundDepth):
                        self.InOrderDepth += 1
                    __visit__(n.Right)

        __visit__(self.Root)

        # If we found it, we return the node "depth", otherwise we return -1
        if (self.FoundDepth):
            return self.InOrderDepth
        else:
            return -1
        
def inorder(tree, num):
    return tree.inorder_rank(num)

def main():
    myTree = Tree()
    myTree.insert(21)
    myTree.insert(28)
    myTree.insert(14)
    myTree.insert(11)
    myTree.insert(18)
    myTree.insert(25)
    myTree.insert(32)
    myTree.insert(27)
    myTree.insert(12)
    myTree.insert(5)
    myTree.insert(15)
    myTree.insert(19)
    myTree.insert(23)
    myTree.insert(30)
    myTree.insert(37)
    print(inorder(myTree, 21))

main()