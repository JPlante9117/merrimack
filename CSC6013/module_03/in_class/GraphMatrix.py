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

class OutOfBounds(Exception):
    pass

def main():
    # Get valid user input of 2
    while True:
        u_input = 0
        try:
            u_input = int(input("Provide a number of vertices from 2 to 5: "))
            if (u_input < 2 or u_input > 5):
                raise OutOfBounds
            break
        except OutOfBounds:
            print("Input not in bounds.")
        except KeyboardInterrupt:
            break
        except:
            print("Invalid Input.")

    # Instantiate Edges
    edges = []

    # Get 2n edges from user
    while len(edges) < 2 * u_input:
        try:
            triplet_string = input(f"Provide three numbers separated by a single space (the first two must be 0 - {u_input - 1}): ")
            i, j, w = triplet_string.split(" ")

            # Store values as a triplet
            triplet = (int(i), int(j), int(w))
            # Add triplet to Edges
            edges.append(triplet)
        except:
            print("Invalid input")

    # Use Edges and Vertecies count to instantiate GraphMatrix
    user_graph = GraphMatrix(edges, u_input)
    # Print out the matrix
    user_graph.print_matrix()

main()