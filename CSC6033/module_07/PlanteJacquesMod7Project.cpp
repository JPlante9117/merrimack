#include <iostream>
#include <vector>
using namespace std;

class BinaryTM
{
    private:
        // Our TM states
        enum State {I, J, K, L, M, N, O, P, F};
    public:
        // Our current State
        State cState = I;
        // First passed binary
        string b1 = "";
        // second passed binary
        string b2 = "";
        // joined binary string with "a" in the middle
        string joined_binary = "";
        BinaryTM() {};
        BinaryTM(string binary1, string binary2)
        {
            // Only sets our values if the binary is sanitary
            if (is_binary(binary1) && is_binary(binary2))
            {
                b1 = binary1;
                b2 = binary2;
                joined_binary = join_binary();
            }
        }
        bool is_binary(string b) {
            // Checks to validate binary is only 1's and 0's
            for (char c : b)
            {
                if (c != '1' && c != '0')
                {
                    return false;
                }
            }

            return true;
        }
        string join_binary() { return b1 + 'a' + b2; }
        string add_binary()
        {
            if (joined_binary.length() == 0)
            {
                return "Invalid Binary Provided";
            }

            int i = 0;

            while (cState != F)
            {
                char cChar = ' ';
                if (i < 0 || i >= joined_binary.length())
                {
                    cChar = '@';
                } else {
                    cChar = joined_binary[i];
                }

                switch (cState)
                {
                    case I:
                        if (cChar == 'a')
                        {
                            cState = J;
                        }

                        i += 1;
                        break;
                    case J:
                        if (cChar == '1')
                        {
                            cState = K;
                            i += 1;
                        } else if (cChar == '@')
                        {
                            cState = O;
                            i -= 1;
                        } else {
                            i += 1;
                        }
                        break;
                    case K:
                        if (cChar == '@')
                        {
                            cState = L;
                            i -= 1;
                        } else
                        {
                            i += 1;
                        }
                        break;
                    case L:
                        if (cChar == '0') {
                            joined_binary[i] = '1';
                        } else
                        {
                            cState = M;
                            joined_binary[i] = '0';
                        }

                        i -= 1;
                        break;
                    case M:
                        if (cChar == 'a') {
                            cState = N;
                        }

                        i -= 1;
                        break;
                    case N:
                        if (cChar == '1')
                        {
                            joined_binary[i] = '0';
                            i -= 1;
                        } else if (cChar == '0')
                        {
                            cState = I;
                            joined_binary[i] = '1';
                            i -= 1;
                        } else if (cChar == '@')
                        {
                            cState = I;
                            joined_binary = "1" + joined_binary;
                            i = 0;
                        }
                        break;
                    case O:
                        if (cChar == '0')
                        {
                            joined_binary.pop_back();
                        } else if (cChar == 'a')
                        {
                            cState = P;
                            joined_binary.pop_back();
                        }
                        i -= 1;
                        break;
                    case P:
                        if (cChar == '@') {
                            cState = F;
                            i += 1;
                        } else  {
                            i -= 1;
                        }
                        break;
                    case F:
                        // Shouldn't reach this ever, since the while should break
                        break;
                }
            }

            return joined_binary;
        }
};

int main()
{
    string b1 = "1101";
    string b2 = "101";
    BinaryTM TM_1 = BinaryTM(b1, b2);
    string sum_1 = TM_1.add_binary();

    // Should result in 10010
    cout << "Adding together: " << b1 << " and " << b2 << " becomes : " << sum_1 << endl;

    string b3 = "1101";
    string b4 = "11";
    BinaryTM TM_2 = BinaryTM(b3, b4);
    string sum_2 = TM_2.add_binary();

    // Should result in 10000
    cout << "Adding together: " << b3 << " and " << b4 << " becomes : " << sum_2 << endl;

    return 0;
}