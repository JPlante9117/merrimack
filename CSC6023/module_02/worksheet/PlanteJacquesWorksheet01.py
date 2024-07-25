import random, cProfile

def unique_brute(a):
    ans = True
    for i in range(len(a)):
        for j in range(len(a)):
            if (i != j) and (a[i] == a[j]):
                ans = False
                break
        if (not ans):
            break
    
    return ans

def unique_TaC(a):
    a.sort()
    for i in range(len(a)):
        if (a[i - 1] == a[i]):
            return False

    return True

def main():
    randArr = [random.randrange(1, 1000001) for _ in range(1000)]
    unique_brute(randArr)

def main_TaC():
    randArr = [random.randrange(1, 1000001) for _ in range(1000)]
    unique_TaC(randArr)

print("Brute-Force cProfile: ")
cProfile.run("main()")

print("Transform-And-Conquer cProfile: ")
cProfile.run("main_TaC()")