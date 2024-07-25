#include <iostream>
#include <string>
using namespace std;

class FSA
{
    private:
        enum State { Start, onA, onB, onC, retT, retF };
        int sameLetterCount = 0;
        bool tripleLetterFound = false;
    public:
        State cState = Start;
        int length = 0;
        bool badCharacterFound = false;
        bool isAccepted() { return cState == retT; };
        bool ProcessCharacter(char character)
        {
            switch(cState)
            {
                case Start:
                    // Only increment length if not '.' character
                    length += character == '.' ? 0 : 1;
                    if (character == 'a')
                    {
                        cState = onA;
                        sameLetterCount += 1;
                    }
                    else if (character == 'b')
                    {
                        cState = onB;
                        sameLetterCount += 1;
                    }
                    else if (character == 'c')
                    {
                        cState = onC;
                        sameLetterCount += 1;
                    }
                    else if (character == '.')
                    {
                        cState = retF;
                        // Reduce the length by 1 since this character should not count towards length
                        length -= 1;
                    }
                    else {
                        badCharacterFound = true;
                        cState = retF;
                    }
                    break;
                case onA:
                    // Only increment length if not '.' character
                    length += character == '.' ? 0 : 1;
                    if (character == 'a')
                    {
                        cState = onA;
                        sameLetterCount += 1;
                        if (sameLetterCount >= 3)
                        {
                            tripleLetterFound = true;
                        }
                    }
                    else if (character == 'b')
                    {
                        cState = onB;
                        sameLetterCount = 1;
                    }
                    else if (character == 'c')
                    {
                        cState = onC;
                        sameLetterCount = 1;
                    }
                    else if (character == '.')
                    {
                        if (length >= 3 && tripleLetterFound)
                        {
                            cState = retT;
                        }
                        else
                        {
                            cState = retF;
                        }
                    }
                    else {
                        badCharacterFound = true;
                        cState = retF;
                    }
                    break;
                case onB:
                    // Only increment length if not '.' character
                    length += character == '.' ? 0 : 1;
                    if (character == 'a')
                    {
                        cState = onA;
                        sameLetterCount = 1;
                    }
                    else if (character == 'b')
                    {
                        cState = onB;
                        sameLetterCount += 1;
                        if (sameLetterCount >= 3)
                        {
                            tripleLetterFound = true;
                        }
                    }
                    else if (character == 'c')
                    {
                        cState = onC;
                        sameLetterCount = 1;
                    }
                    else if (character == '.')
                    {
                        if (length >= 3 && tripleLetterFound)
                        {
                            cState = retT;
                        }
                        else
                        {
                            cState = retF;
                        }
                    }
                    else {
                        badCharacterFound = true;
                        cState = retF;
                    }
                    break;
                case onC:
                    // Only increment length if not '.' character
                    length += character == '.' ? 0 : 1;
                    if (character == 'a')
                    {
                        cState = onA;
                        sameLetterCount = 1;
                    }
                    else if (character == 'b')
                    {
                        cState = onB;
                        sameLetterCount = 1;
                    }
                    else if (character == 'c')
                    {
                        cState = onC;
                        sameLetterCount += 1;
                        if (sameLetterCount >= 3)
                        {
                            tripleLetterFound = true;
                        }
                    }
                    else if (character == '.')
                    {
                        if (length >= 3 && tripleLetterFound)
                        {
                            cState = retT;
                        }
                        else
                        {
                            cState = retF;
                        }
                    }
                    else {
                        badCharacterFound = true;
                        cState = retF;
                    }
                    break;
                case retT:
                    break;
                case retF:
                    break;
            }
            return cState == retT || cState == retF;
        }
};

int main()
{
    FSA fsa;
    string input;
    
    cout << "Our FSA matches strings that are at least 3 characters long and have a triple letter sequence in them." << endl;
    cout << "Enter a string (alphabet { a, b, c}) followed by '.' to denote the end of the string: ";
    // Get user input
    cin >> input;


    for (char c : input)
    {
        // Returns true if we got to retT or retF state
        if (fsa.ProcessCharacter(c))
        {
            // State is retT
            if (fsa.isAccepted())
            {
                cout << "String Matches! (At least 3 letters, contains triple letter sequence)" << endl;
            }
            // State is retF
            else
            {
                if (fsa.badCharacterFound)
                {
                    cout << "String contains bad characters" << endl;
                }
                else if (fsa.length < 3)
                {
                    cout << "String not long enough" << endl;
                }
                else
                {
                    cout << "String does not contain triple letter sequence" << endl;
                }
            }

            break;
        }
    }
}