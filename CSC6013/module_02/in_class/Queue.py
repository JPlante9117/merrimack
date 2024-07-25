from LinkedList import LinkedList

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
