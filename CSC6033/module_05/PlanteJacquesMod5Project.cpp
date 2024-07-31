#include <iostream>
#include <string>
#include <vector>
#include <regex>
using namespace std;

class SimpleStack
{
    public:
        // Picking 100 as our largest size
        vector<char> arr;
        void push(char s) { arr.insert(arr.begin(), s); }
        void pop() { arr.erase(arr.begin()); }
        char read() { return arr[0]; }
};

int main()
{
    string u_input = "";

    cout << "Your string may include any letter a-z, spaces, (, ), [, ]" << endl;
    cout << "Please provide a string: ";

    // Use getline here to make sure parenthesis and brackets are kept
    getline(cin, u_input);

    // Uses regex to validate that the string only contains a-z, spaces, (), and [] characters
    regex pattern("([a-z]| |\\[|\\]|\\(|\\))*");
    bool valid = std::regex_match(u_input, pattern);

    // Early return if invalid
    if (!valid)
    {
        cout << "String contained illegal characters" << endl;
        return 0;
    }

    cout << "Your user input: " << u_input << endl << endl;

    string tape = u_input;
    SimpleStack stack;
    bool acceptable = true;

    // Denoting the end of the word
    stack.push('$');

    for(int i = 0; i < tape.length(); i++)
    {
        // Stop reading the tape if we've already failed
        if (!acceptable)
        {
            break;
        }

        char current = tape[i];
        char top     = stack.read();

        switch(current)
        {
            case '(':
                stack.push('(');
                break;
            case ')':
                if (top != '(')
                {
                    acceptable = false;
                } else {
                    stack.pop();
                }
                break;
            case '[':
                stack.push('[');
                break;
            case ']':
                if (top != '[')
                {
                    acceptable = false;
                } else {
                    stack.pop();
                }
                break;
            default:
                break;
        }
    }

    if (!acceptable || (acceptable && stack.read() != '$'))
    {
        cout << "Entered string did not pass our PDA." << endl;
    } else
    {
        cout << "Entered string passed the PDA!" << endl;
    }

    return 0;
}
