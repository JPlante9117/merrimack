from itertools import combinations

def permutations(n):
    ones = list(combinations(list(range(n)), n//2))
    ans = []
    for o in ones:
        case = []
        for i in range(n):
            if i in o:
                case.append(1)
            else:
                case.append(0)
        ans.append(case)
    return ans

def check(mat):
    n = len(mat[0])
    for j in range(n):
        acc0, acc1 = 0, 0
        for i in range(len(mat)):
            if mat[i][j] == 1:
                acc1 += 1
            elif mat[i][j] == 0:
                acc0 += 1
            if (acc0 > (n//2) or (acc1 > n//2)):
                return False
    
    return True

def layer(r, mat, perm, ans):
    for p in perm:
        mat.append(p)
        if check(mat):
            if (r+1 == len(p)):
                ans += 1
            else:
                ans = layer(r+1, mat, perm, ans)
        mat.pop()
    return ans

def balanced01mat(n):
    perm = permutations(n)
    ans = layer(0, [], perm, 0)
    return ans

import cProfile
cProfile.run('print("Balanced matrices of order 6 is", balanced01mat(6))')