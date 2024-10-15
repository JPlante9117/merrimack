# Bubble Sort in Python
def bubbleSort(a):
    # loop to access each array element
    for i in range(len(a)):
        # loop to compare array elements
        for j in range(0, len(a)-i-1):
            # compare two adjacent elements
            if a[j] > a[j+1]:
                # swapping elements if elements not in order
                a[j+1], a[j] = a[j], a[j+1]
        for k in range(len(a)-1, len(a)-(i+2),-1):

            # Triggers if the array isn't sorted
            if (a[k] < a[k-1]):
                print("Error at i =", i)
                print(a[k], a[k-1])
                break

data = [5, -3, -9, 3, 16, 0]
bubbleSort(data)
print(data)