def hanoi_tower(disks):
    if (disks == 1):
        return 1
    elif (disks == 0):
        return 0
    
    return 2 * hanoi_tower(disks - 1) + 1

def main():
    u_input = 0
    while (u_input <= 0):
        try:
            u_input = int(input("Enter a number of rings on a hanoi tower: "))
        except:
            print("Invalid input.")

    min_moves = hanoi_tower(u_input)

    print(f"For {u_input} disks, it will take {min_moves} moves to complete")

main()