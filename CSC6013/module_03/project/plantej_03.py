# Set up as a Node in a Binary Tree
class Node:
    def __init__(self, data, left=None, right=None,):
        self.data = data
        self.left = left
        self.right = right
        self.count = 1
        self.tmpId = None # will be used for traversal ID assignment

# Set Up as a Binary Tree
class Tree:
    def __init__(self, root=None):
        if (root):
            self.Root = Node(root)
            self.Current = self.Root
            self.NodeCount = 1
            self.TmpNodeId = 0
        else:
            self.Root = None
            self.Current = None
            self.NodeCount = 0
            self.TmpNodeId = 0

    def reset_current(self):
        self.Current = self.Root

    def insert_into_tree(self, data):
        new_node = Node(data)
        if (not self.Root):
            self.Root = new_node
            self.Current = self.Root
            self.NodeCount = 1
        else:
            current_data = self.Current.data
            data_is_bigger = current_data > data
            data_is_smaller = current_data < data
            data_is_same = current_data == data
            if (data_is_bigger and not self.Current.left): # If Left is Empty, insert
                self.Current.left = new_node
                self.NodeCount = self.NodeCount + 1
            elif (data_is_bigger and self.Current.left): # If Left isn't Empty, recurse Left
                self.Current = self.Current.left
                self.insert_into_tree(data)
            elif (data_is_same):
                self.Current.count = self.Current.count + 1
            elif (data_is_smaller and not self.Current.right): # If Right is Empty, insert
                self.Current.right = new_node
                self.NodeCount = self.NodeCount + 1
            elif (data_is_smaller and self.Current.right): # If Right isn't Empty, recurse Right
                self.Current = self.Current.right
                self.insert_into_tree(data)

        if (self.Current is not self.Root):
            self.reset_current()

    def print_node_preorder(self, node: Node, depth=0, side=None):
        print(f"{"---" * (depth)}{'' if not side else side + ":"}{node.data} {{{node.count}}}")
        if (node.left):
            self.print_node_preorder(node.left, depth + 1, "L")
        if (node.right):
            self.print_node_preorder(node.right, depth + 1, "R")


    def print_tree_preorder(self):
        self.print_node_preorder(self.Current)

    def print_node_postorder(self, node: Node, depth=0, side=None):
        if (node and node.data is not None):
            self.print_node_postorder(node.left, depth + 1, "L")
            self.print_node_postorder(node.right, depth + 1, "R")
            print(f"{"---" * (depth)}{'' if not side else side + ":"}{node.data} {{{node.count}}}")

    def print_tree_postorder(self):
        self.print_node_postorder(self.Current)

    def print_node_inorder(self, node: Node, depth=0, side=None):
        if (node and node.left is not None):
            self.print_node_inorder(node.left, depth + 1, "L")
        print(f"{"---" * (depth)}{'' if not side else side + ":"}{node.data} {{{node.count}}}")
        if (node and node.right is not None):
            self.print_node_inorder(node.right, depth + 1, "R")

    def print_tree_inorder(self):
        self.print_node_inorder(self.Current)

    def print_tree(self, type):
        """Prints a tree out by traversal type"""
        print("==========")
        if (type == "preorder"):
            self.print_tree_preorder()
        elif (type == "postorder"):
            self.print_tree_postorder()
        elif (type == "inorder"):
            self.print_tree_inorder()
        print("==========")

    def convert_nodes_to_edges_preorder(self, node: Node, edges:list=[], node_id = 0):
        if (not node.tmpId):
            node.tmpId = self.TmpNodeId
        if (node.left):
            self.TmpNodeId = self.TmpNodeId + 1
            triplet = (node.tmpId, self.TmpNodeId, abs(node.data - node.left.data))
            edges.append(triplet)
            self.convert_nodes_to_edges_preorder(node.left, edges)
        if (node.right):
            self.TmpNodeId = self.TmpNodeId + 1
            triplet = (node.tmpId, self.TmpNodeId, abs(node.data - node.right.data))
            edges.append(triplet)
            self.convert_nodes_to_edges_preorder(node.right, edges)

        node.tmpId = None

        return edges


    def convert_to_graph_matrix(self):
        if (self.Current is not self.Root):
            self.reset_current()

        edges = self.convert_nodes_to_edges_preorder(self.Current)
        matrix = GraphMatrix(edges, self.NodeCount)

        return matrix

# Same GraphMatrix from in class work
class GraphMatrix:
    def __init__(self, edges: list, vertex_count: int):
        self.vertex_count = vertex_count
        self.edges = edges
        # Store all edges in a vertex dictionary
        self.edge_dict = {}
        for origin, destination, weight in edges:
            if origin in self.edge_dict.keys():
                self.edge_dict[origin].append((destination, weight))
            else:
                self.edge_dict[origin] = [(destination, weight)]

        # Get Adjacency Matrix
        self.adjacency_matrix = self.get_adjacency_matrix()

    def get_adjacency_matrix(self):
        """Creates an adjacency array from Graph's provided edges and vertecies"""
        # Create empty adjacency matrix based on vertex count
        adjacency_matrix = [[0] * self.vertex_count for _ in range(self.vertex_count)]
        # For each item in our edge dictionary...
        for origin, edge in self.edge_dict.items():
            # For each edge in that node's edges...
            for destination, weight in edge:
                # Set value in adjacency matrix to the weight of the edge
                adjacency_matrix[origin][destination] = weight

        return adjacency_matrix

    def print_matrix(self):
        """Loops through rows of matrix and prints each item as a string in a column"""
        # This function finds the max value among all values in the matrix and stores it's string length in a variable
        max_width = len(str(max(map(max, self.adjacency_matrix))))
        for row in self.adjacency_matrix:
            # Then we print our matrix by row with each column the size of our max string length to prevent weird printing
            print(" ".join(str(cell).rjust(max_width) for cell in row))

# Helpers
def readNums(fileName, tree: Tree):
    infile = open(fileName, "r")
    for line in infile:
        try:
            tree.insert_into_tree(int(line))
        except:
            # Non Numeric Provided, skip
            pass
        
def main():
    t = Tree()
    fileName = "numbers.txt"
    readNums(fileName, t)
    matrix = t.convert_to_graph_matrix()

    matrix.print_matrix()

main()