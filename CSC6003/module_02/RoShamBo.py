import random, sys

print('ROCK PAPER SCISSORS')
wins = 0
losses = 0
ties = 0

# Game Loop
while True:
    print('%s wins, %s losses, %s ties' % (wins, losses, ties))
    #Player Loop
    while True:
        print('Choose between (r)ock, (p)aper, (s)cissors, or you can (q)uit')
        userMove = input()
        if (userMove == 'q'):
            # User Quits
            sys.exit()
        elif (userMove == 'r' or userMove == 'p' or userMove == 's'):
            #valid move
            break
        else:
            #Invalid Move
            print('Sorry, that move isn\'t valid.')

    if (userMove == 'r'):
        print('ROCK versus...')
    elif (userMove == 'p'):
        print('PAPER versus')
    else:
        print('SCISSORS versus...')
    # Robot Move
    robotMove = random.randint(1, 3)
    if (robotMove == 1):
        robotMove = 'r'
        print('ROCK!')
    elif (robotMove == 2):
        robotMove = 'p'
        print('PAPER!')
    else:
        robotMove = 's'
        print('SCISSORS!')
    
    if (userMove == robotMove):
        print('It\'s a tie!')
        ties = ties + 1
    elif (
        (userMove == 'r' and robotMove == 's') or
        (userMove == 's' and robotMove == 'p') or
        (userMove == 'p' and robotMove == 'r')
    ):
        print('You win!')
        wins = wins + 1
    else:
        print('You lose!')
        losses = losses + 1
    

