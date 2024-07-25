#include <iostream>
using namespace std;

// Function
int multiply_vectors(int* v1, int* v2, int size)
{
    int total = 0, i;
    for (i = 0; i < size; i++)
    {
        total += v1[i] * v2[i];
    }

    return total;
}

// Driver
int main()
{
    int test_1_v1[3] = { 8, 16, 32 },
        test_1_v2[3] = { 5, 9, 13 },
        test_1_size  = 3,
        test_2_v1[2] = { 3, 8 },
        test_2_v2[2] = { 11, 22 },
        test_2_size  = 2;
    
    string test_1_v1_str = "[ ",
           test_1_v2_str = "[ ",
           test_2_v1_str = "[ ",
           test_2_v2_str = "[ ";

    // Create strings for test cases
    for (int i = 0; i < test_1_size; i++) {
        test_1_v1_str += to_string(test_1_v1[i]) + " ";
        test_1_v2_str += to_string(test_1_v2[i]) + " ";
    }
    test_1_v1_str += "]";
    test_1_v2_str += "]";

    for (int i = 0; i < test_2_size; i++) {
        test_2_v1_str += to_string(test_2_v1[i]) + " ";
        test_2_v2_str += to_string(test_2_v2[i]) + " ";
    }
    test_2_v1_str += "]";
    test_2_v2_str += "]";

    // Output to terminal
    cout << test_1_v1_str << " x " << test_1_v2_str << " = " << to_string(multiply_vectors(test_1_v1, test_1_v2, test_1_size)) << endl;
    cout << test_2_v1_str << " x " << test_2_v2_str << " = " << to_string(multiply_vectors(test_2_v1, test_2_v2, test_2_size)) << endl;
    
    return 0;
}