#include <iostream>
#include <string>
using namespace std;

enum Month { None, Jan, Feb, Mar, Apr, May, Jun, Jul, Aug, Sep, Oct, Nov, Dec};

class DOB {
    protected:
        Month month = None;
        int day     = 0;
        int year    = 0;
    public:
        DOB() {}
        DOB(Month m, int d, int y) {
            month = m;
            day   = d;
            year  = y;
        }
        void setMonth()        { month = Jan; };
        void setMonth(Month m) { month = m; };
        void setDay()          { day = 1; };
        void setDay(int d)     { day = d; };
        void setYear(int y)    { year = y; };
        string getDate() const {
            return to_string(month)+"/"+to_string(day)+"/"+to_string(year);
        }
};

class HOB: public DOB {
    private:
        int hour = 0;
        int mins = 0;

    public:
        HOB() {}
        HOB(Month m, int d, int y, int h, int n) {
            month = m; day = d; year = y; hour = h; mins = n;
        }
        void setHour(int h) { hour = h; };
        void setMins(int n) { mins = n; };
        string getDate() const {
            int h = (hour == 0) ? 12 :  (hour < 13) ? hour : hour - 12;
            string ampm = (hour < 12) ? "AM":"PM";
            return to_string(month)+"/"+to_string(day)+"/"+to_string(year) + " " + to_string(h) + ":" + to_string(mins) + " " + ampm;
        }
};

int main()
{
    DOB dob(Mar, 14, 2012);
    HOB hob(Feb, 23, 1998, 22, 30);

    cout << dob.getDate() << " - " << hob.getDate() << endl;

    return 0;
}

