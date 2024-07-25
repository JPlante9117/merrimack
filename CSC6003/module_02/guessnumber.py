import random

secretNum = random.randint(1, 20)
print('I am thinking of a number between 1 and 20...')
limit = 6
secretFound = False

for guessTaken in range(1, limit + 1):
    print('Take a guess!')
    userGuess = int(input())

    if (userGuess == secretNum):
        secretFound = True
        break
    elif (userGuess < secretNum):
        print('Your guess was too low')
    else:
        print('Your guess was too high')

if (secretFound):
    print('Nice! You guessed it in {} guesses!'.format(guessTaken))
else:
    print('Sorry! The number I was thinking of was {}'.format(secretNum))