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

// class Full_Date {
//     public:
//         int m = 1;
//         int d = 1;
//         int y = 1;

//         Full_Date() {}
//         // Full_Date() {
//         //     y = 2000;
//         // }
//         Full_Date(int mon, int day) {
//             m = mon;
//             d = day;
//             y = 2020;
//         }
//         int getM() const { return m; }
//         int getD() const { return d; }
//         int getY() const { return y; }
//         void setY(int yr) { y = yr; }
// };

// int main() {
//     Full_Date d1(3,14);
//     Full_Date d2;
//     std::cout << d1.getY() << " and " << d2.getY() << std::endl;
//     std::cout << d1.m << endl;
//     return 0;
// }