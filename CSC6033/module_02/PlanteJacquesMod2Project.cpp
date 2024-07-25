#include <iostream>
#include <vector>
using namespace std;

class squareMatrix
{
    private:
        int dimensions = 0;
        vector< vector<double> > matrix;
    public:
        // Constructors
        squareMatrix() {}
        squareMatrix(int d)
        {
            setDimensions(d);
            resizeMatrix();
        }
        // Setter for our dimensions
        void setDimensions(int d) { dimensions = d; }
        // Resizes our matrix var into our dimensions
        void resizeMatrix() { 
            matrix.resize(dimensions, vector<double>(dimensions, 0));
        }
        // Gets specific element
        double getElement(int row, int col) {
            if ((row >= dimensions || col >= dimensions) || (row < 0 || col < 0)) {
                cout << "Provided Dimensions Out of Bounds" << endl;
                return 0;
            }
            return matrix[row][col];
        }
        // Setter for specific element
        void setElement(int row, int col, double n) {
            if ((row >= dimensions || col >= dimensions) || (row < 0 || col < 0)) {
                cout << "Provided Dimensions Out of Bounds" << endl;
            } else {
                matrix[row][col] = n;
            }
        }
        // Getter for matrix diagonal
        vector<double> getDiagonal() {
            vector<double> vec;
            for (int i = 0; i < dimensions; i++) {
                vec.push_back(matrix[i][i]);
            }

            return vec;
        }
        // Print Display for our matrix
        void printMatrix() {
            for(int i = 0; i < dimensions; i++) {
                string s = "";
                for (int j = 0; j < dimensions; j++) {
                    s += to_string(matrix[i][j]) + "\t";
                }

                cout << s << endl;
            }
        }
};

int main ()
{
    squareMatrix test(3);

    // Print our initial 0'd out matrix
    cout << "The initial Matrix after creation: " << endl;
    test.printMatrix();

    // Set several elements
    test.setElement(0, 2, 3.1342);
    test.setElement(0, 0, 90);
    test.setElement(2, 0, 50.094);
    test.setElement(1, 1, -14.2);

    // Print our new matrix
    cout << endl << "The new matrix after alterations: " << endl;
    test.printMatrix();

    cout << endl << "Getting item [2][0] gives us: " << endl;
    cout << test.getElement(2, 0) << endl;

    // Diagonal Example
    vector<double> diag = test.getDiagonal();
    cout << endl << "The diagonal is: " << endl;
    for (int i = 0; i < diag.size(); i++) {
        cout << to_string(diag[i]) << " ";
    }

    cout << endl;

    return 0;
}

// This main function outputs the following to the terminal:
// The initial Matrix after creation: 
// 0.000000        0.000000        0.000000
// 0.000000        0.000000        0.000000
// 0.000000        0.000000        0.000000

// The new matrix after alterations: 
// 90.000000       0.000000        3.134200
// 0.000000        -14.200000      0.000000
// 50.094000       0.000000        0.000000

// Getting item [2][0] gives us: 
// 50.094

// The diagonal is: 
// 90.000000 -14.200000 0.000000