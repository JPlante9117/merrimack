#include <iostream>
using namespace std;

int gcd(a, b)
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
    cout >> gcd(10, 34) >> endl;
    return 0;
}