import time, sys

indents = 0 # number of indents we will be taking
indentsIncreasing = True # helps control direction
incPattern = '\\\\\\\\\\\\\\\\'
decPattern = '////////'

try:
    while True:
        print(' ' * indents, end='')
        print(incPattern if indentsIncreasing else decPattern)
        time.sleep(0.1) # 1/10th sec sleep

        if (indentsIncreasing):
            indents = indents + 1
        else:
            indents = indents - 1

        if (indents >= 20):
            indentsIncreasing = False
        elif (indents <= 0):
            indentsIncreasing = True
except KeyboardInterrupt:
    sys.exit()
