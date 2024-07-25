type NumMatrix = list[list[int|float]]

def multiply_n_dimension_matricies(n: int, matrix_a: NumMatrix, matrix_b: NumMatrix) -> NumMatrix:
    """Takes in a positive int n representing the dimensions of the nxn matricies of the other arguments.

    This function runs off of the assumption that matrix_a and matrix_b are nxn matricies

    Time Complexity: O(n**3)
    
    DOCTESTS
    >>> m1 = [[2,7],[3,5]]
    >>> m2 = [[8,-4],[6,6]]
    >>> m3 = [[1,0,2],[3,-2,5],[6,2,-3]]
    >>> m4 = [[0.3,0.25,0.1],[0.4,0.8,0],[-0.5,0.75,0.6]]
    >>> multiply_n_dimension_matricies(2, m1, m2)
    [[58, 34], [54, 18]]
    >>> multiply_n_dimension_matricies(3, m3, m4)
    [[-0.7, 1.75, 1.3], [-2.4, 2.9, 3.3], [4.1, 0.85, -1.2]]
    """
    if (n < 2):
        print("n should not be less than 2")
        return
    
    # Instantiate nxn result matrix
    dot_product_matrix = [[0 for _ in range(n)] for _ in range(n)]
    
    for i in range(n):
        for j in range(n):
            for k in range(n):
                # Update the appropriate value rounded to 2 decimal points
                dot_product_matrix[i][j] = round(dot_product_matrix[i][j] + (matrix_a[i][k] * matrix_b[k][j]), 2)
            
    return dot_product_matrix

def main():
    m1 = [[2,7],
          [3,5]]
    m2 = [[8,-4],
          [6,6]]
    m3 = [[1,0,2],
          [3,-2,5],
          [6,2,-3]]
    m4 = [[0.3,0.25,0.1],
          [0.4,0.8,0],
          [-0.5,0.75,0.6]]
    
    multiply_n_dimension_matricies(2, m1, m2)
    multiply_n_dimension_matricies(3, m3, m4)

main()