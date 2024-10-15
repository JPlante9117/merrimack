from itertools import combinations

def permutations(n):
    """Generates all combinations of binary vectors of length n with n//2 ones."""
    half = n // 2
    return [[1 if i in o else 0 for i in range(n)] for o in combinations(range(n), half)]

def check(mat):
    """Checks if the matrix is balanced, ensuring no column has more than n//2 zeros or ones."""
    n = len(mat)  # Number of rows
    m = len(mat[0])  # Number of columns
    for j in range(m):
        acc0 = sum(mat[i][j] == 0 for i in range(n))  # Count of 0s
        acc1 = n - acc0  # Count of 1s
        if acc0 > n // 2 or acc1 > n // 2:
            return False
    return True

def layer(r, mat, perm, ans):
    """Recursively builds the matrix and counts valid configurations."""
    for p in perm:
        mat.append(p)  # Add current permutation
        if check(mat):
            if r + 1 == len(p):  # If we've filled all rows
                ans[0] += 1  # Increment count of valid matrices
            else:
                ans[0] = layer(r + 1, mat, perm, ans)  # Continue to next row
        mat.pop()  # Remove last permutation for backtracking
    return ans[0]

def balanced01mat(n):
    """Initiates the generation of balanced binary matrices."""
    perm = permutations(n)
    ans = [0]  # Use a list to mutate in layer function
    layer(0, [], perm, ans)
    return ans[0]

import cProfile
cProfile.run('print("Balanced matrices of order 6 is", balanced01mat(6))')
