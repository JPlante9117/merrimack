#include <iostream>

/**
 * This implementation is in C++ but I found that once integers get too large, it starts
 * returning 0 because it cannot be stored properly even in a "long long". 65 is the last item that
 * returns any number and in fact ends up returning a negative number due to integer overflow and 
 * wrap-around.
 * 
 * Running the Python code, alternatively, shows that the interpreted language can in fact
 * write out large quantities like 1000! since Python is not limiting the variable storage itself.
 */
void fact()
{
    int n;

    std::cout << "Enter a positive integer: ";
    // Capture user input into n
    std::cin >> n;

    // Handle negative numbers
    while (n < 0)
    {
        std::cout << "Sorry, only positive numbers, enter again: ";
        std::cin >> n;
    }

    // Handle 0
    if (n == 0)
    {
        std::cout << "The factorial of 0 is 1";
    }
    // Handle the proper number
    else
    {
        long long f = 1;
        for (int i = 1; i < n + 1; i++)
        {
            f *= i;
        }

        std::cout << "The factorial of " << n << " is " << f << std::endl;
    }
}

int main()
{
    fact();

    return 0;
}