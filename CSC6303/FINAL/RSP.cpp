#include <iostream>
#include <string>
#include <random>

/**
 * Checks through an array to see if the target is found
 */
bool stringInArray(const std::string arr[], int size, const std::string& target) {
    for (int i = 0; i < size; ++i)
    {
        if (arr[i] == target)
        {
            return true;
        }
    }

    return false;
}

void RSP()
{
    std::string guess;
    std::string valid[] = {"r", "s", "p"};
    while (true)
    {
        std::cout << "Enter (r)ock, (s)cissors, or (p)aper" << std::endl;
        std::cin >> guess;

        if (!stringInArray(valid, 3, guess))
        {
            std::cout << "Only 'r', 's', and 'p' are valid inputs! Please try again.";
        } else
        {
            break;
        }
    }

    // Generate a random double between 0 and 1
    std::random_device rd;
    std::mt19937 gen(rd());

    std::uniform_real_distribution<double> dis(0.0, 1.0);

    double rand = dis(gen);

    // Use that random number to make a random computer choice
    std::string comp;
    if (rand < (1.0/3))
    {
        comp = "r";
    } else if (rand < (2.0/3))
    {
        comp = "s";
    } else
    {
        comp = "p";
    }

    // Compare to user input for win/loss condition
    if (guess == comp)
    {
        std::cout << "It's a tie!" << std::endl;
    } else if (
        ((guess == "r") && (comp == "p")) ||
        ((guess == "s") && (comp == "r")) ||
        ((guess == "p") && (comp == "s"))
    )
    {
        std::cout << "Sorry, you lost as I had " << comp << std::endl;
    } else
    {
        std::cout << "Congrats, you won as I had " << comp << std::endl;
    }
}

int main()
{
    RSP();

    return 0;
}