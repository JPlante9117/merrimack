class Queue:
    """This class implements a Queue data type.
    The Queue behavior is First-In-First-Out (FIFO) and that process is handled utilizing
    the enqueue and dequeue methods.

    This is achieved using two lists: 'a_in' for enqueuing elements and 'a_out' for dequeuing elements.
    """
    def __init__(self):
        """The constructor for the Queue Data type that instantiates two variables:
        - a_in : Handles enqueuing elements (adding to the queue)
        - a_out : Handles dequeing elements (removing from the queue)
        When 'a_out' is empty, elements are transferred from 'a_in' to 'a_out' 
        """
        self.a_in = []
        self.a_out = []
    def enqueue(self, d):
        """Adds an item to the queue (enqueue).

        Appends the given item 'd' to the 'a_in' list, placing it at the end of the Queue.

        Args:
            d: the item to be added to the Queue.
        """
        self.a_in.append(d)
    def dequeue(self):
        """Removes and returns the first item from the queue (dequeue).

        If 'a_out' is empty, transfer all items from 'a_in' to 'a_out'. Then, removes and returns
        the first item from 'a_out'. If 'a_out' is not empty, remove the first item from 'a_out'
        without moving any items from 'a_in'

        Returns:
            The first enqueued item, which is also removed from the queue.
        """
        if (self.a_out == []):
            for d in self.a_in:
                self.a_out.append(d)
            self.a_in = []
        return self.a_out.pop(0)