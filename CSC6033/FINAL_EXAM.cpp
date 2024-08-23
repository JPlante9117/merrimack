#include <iostream>
using namespace std;

int gcd(int a, int b)
{
    if (b == 0)
    {
        return a;
    }

    int c = a % b;

    return gcd(b, c);
}

int main()
{
    int ex1 = gcd(513, 39);
    int ex2 = gcd(1812, 210);
    int ex3 = gcd(1533, 133);

    cout << "the GCD of 513 and 39 is: " << ex1 << endl;
    cout << "the GCD of 1812 and 210 is: " << ex2 << endl;
    cout << "the GCD of 1533 and 133 is: " << ex3 << endl;
    return 0;
}