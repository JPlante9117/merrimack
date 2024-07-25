def diffTwoSets(A, B):
    C = []
    print(f'Current C: {C}')
    for aNum in A:
        print(f'checking if {aNum} is in array B...')
        if aNum not in B:
            print('NOT FOUND IN B, APPENDING TO C')
            C.append(aNum)
        else:
            print('FOUND IN B, NOT APPENDING')
        print(f'Current C: {C}')

    return C

A = [20, 40, 70, 30, 10, 80, 50, 90, 60]
B = [35, 45, 55, 60, 50, 40]

print(diffTwoSets(A, B))