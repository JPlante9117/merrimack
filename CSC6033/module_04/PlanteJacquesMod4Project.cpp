#include <iostream>
#include <string>
using namespace std;

class FSA
{
    private:
        enum State { Start, onA, onB, retT, retF };
    public:
        State cState = Start;
        bool doubleB = false;
        bool startA  = false;
        bool startB  = false;
        int length   = 0;
        bool isAccepted() { return cState == retT; };
        bool ProcessCharacter(char character)
        {
            switch(cState)
            {
                case Start:
                    if (character == 'a')
                    {
                        cState = onA;
                        startA = true;
                    }
                    else if (character == 'b')
                    {
                        cState = onB;
                        startB = true;
                    }
                    else {
                        cState = retF;
                    }
                    length += 1;
                    break;
                case onA:
                    if (character == '.')
                    {
                        // If we have reached this point, it must be valid
                        cState = retT;
                    }
                    else if (character != 'a' && character != 'b')
                    {
                        cState = retF;
                    }
                    length += character == '.' ? 0 : 1;
                case onB:
                    if (character == 'a')
                    {
                        if (startB && length == 1)
                        {
                            cState = retF;
                        }
                        else
                        {
                            cState = onA;
                        }
                    }
                    else if (character == 'b')
                    {
                        cState = onB;
                        if (startB && length == 1)
                        {
                            doubleB = true;
                        }
                        else if (startB)
                        {
                            // Double B cannot have any b after it
                            // (bb(a)*) --> bb followed by 0 or more a's
                            cState = retF;
                        }
                    }
                    else if (character == '.')
                    {
                        // If we have reached this point, it must be valid
                        cState = retT;
                    }
                    else {
                        cState = retF;
                    }
                    length += character == '.' ? 0 : 1;
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
    
    // RegEx explained:
    // Must start with a and be followed by 0 or more a's or b's
    // OR
    // Must start with bb and be followed by 0 or more a's and NO b's
    cout << "Our RegEx rule is (a(a|b)*)|(bb(a)*)" << endl;
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
                cout << "String Matches our RegEx" << endl;
            }
            // State is retF
            else
            {
                cout << "String does not match our RegEx" << endl;
            }

            break;
        }
    }
}