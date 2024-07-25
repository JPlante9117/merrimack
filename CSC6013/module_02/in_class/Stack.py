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