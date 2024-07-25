def arr_sum(A, s, e):
    if (s == e):
        return A[s]
    else:
        mid = (s + e) // 2
        return arr_sum(A, s, mid) + arr_sum(A, mid+1, e)
    
v = [1, 2, 3, 4]

print(arr_sum(v, 0, 3))