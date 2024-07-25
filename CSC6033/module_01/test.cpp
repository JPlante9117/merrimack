#include <iostream>
using namespace std;

int main()
{
    int a[10][10], b[10][10], mult[10][10], r1, c1, r2, c2, i, j, k;
    string multistr[10][10];

    cout << "Enter rows and columns for first matrix: ";
    cin >> r1 >> c1;
    cout << "Enter rows and columns for second matrix: ";
    cin >> r2 >> c2;

    // If column of first matrix in not equal to row of second matrix,
    // ask the user to enter the size of matrix again.
    while (c1!=r2)
    {
        cout << "Error! column of first matrix not equal to row of second.";

        cout << "Enter rows and columns for first matrix: ";
        cin >> r1 >> c1;

        cout << "Enter rows and columns for second matrix: ";
        cin >> r2 >> c2;
    }

    // Storing elements of first matrix.
    cout << endl << "Enter elements of matrix 1:" << endl;
    for(i = 0; i < r1; ++i)
        for(j = 0; j < c1; ++j)
        {
            cout << "Enter element a" << i + 1 << j + 1 << " : ";
            cin >> a[i][j];
        }

    // Storing elements of second matrix.
    cout << endl << "Enter elements of matrix 2:" << endl;
    for(i = 0; i < r2; ++i)
        for(j = 0; j < c2; ++j)
        {
            cout << "Enter element b" << i + 1 << j + 1 << " : ";
            cin >> b[i][j];
        }

    // Here are our matricies
    string astring = " ";
    string bstring = " ";
    for(i = 0; i < r1; ++i)
    {
        for(j = 0; j < c2; ++j)
        {
            if (a[i][j])
                astring += to_string(a[i][j]) + " ";
            if (b[i][j])
                bstring += to_string(b[i][j]) + " ";
        }
        astring += "\n ";
        bstring += "\n ";
    }

    cout << "Matrix A: \n" << astring;
    cout << "Matrix B: \n" << bstring;

    // Initializing elements of matrix mult to 0.
    for(i = 0; i < r1; ++i)
    for(j = 0; j < c2; ++j)
    {
        mult[i][j]=0;
        multistr[i][j]="";
    }

    // Multiplying matrix a and b and storing in array mult.
    for(i = 0; i < r1; ++i)
        for(j = 0; j < c2; ++j)
        {
            string astring = "[ ";
            string bstring = "[ ";
            for(k = 0; k < c1; ++k)
            {
                astring += to_string(a[i][k]) + " ";
                bstring += to_string(b[k][j]) + " ";
                mult[i][j] += a[i][k] * b[k][j];
                
            }
            astring += "]";
            bstring += "]";
            multistr[i][j] = astring + " x " + bstring;
        }

    cout << "Multiplications: " << endl;
    for(i = 0; i < r1; ++i)
    for(j = 0; j < c2; ++j)
    {
        cout << multistr[i][j] << " = " << mult[i][j] << endl;
    }

    // Displaying the multiplication of two matrix.
    cout << endl << "Output Matrix: " << endl;
    for(i = 0; i < r1; ++i)
    for(j = 0; j < c2; ++j)
    {
        cout << " " << mult[i][j];
        if(j == c2-1)
            cout << endl;
    }

    return 0;
}