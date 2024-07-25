#include <iostream>
#include <string>
using namespace std;

enum Days {Sun, Mon, Tue, Wed, Thu, Fri, Sat};

int main()
{
    class b {
        public:
            void sayHi() {cout << "HI!!" << endl;}
    };
    class a: public b {
        public:
            void sayHi() { cout << "Hello there" << endl; }
    };

    a Toots;

    Toots.sayHi();

    return 0;
}