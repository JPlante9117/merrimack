def main():
    print("This program computes the square of an Integer")
    print()
    n = int(input("Enter an Integer: "))
    acc = 0
    odd = 1
    for i in range(n):
        acc += odd
        odd += 2

    print("The square of", n, " is ", acc)

main()