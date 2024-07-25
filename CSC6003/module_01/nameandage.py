# This program says hello and asks for my name

print('Hello World!')
print('What is your name?')
MyName = input()
print('It is good to meet you, {}'.format(MyName))
print('Your name is {} characters long'.format(len(MyName)))
print('How old are you?')
MyAge = int(input())
while(MyAge < 0):
    print("That's not right, you can't be negative years old! Let's try again.")
    print('How old are you?')
    MyAge = int(input())
print('Wow! So you will be {} in one year!'.format(str(int(MyAge) + 1)))