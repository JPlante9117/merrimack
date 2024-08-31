package CSC6301.module_02.InClass;
import java.util.Scanner;

/**
 * Java Class implementation of the Module 2 In Class Python code
 * This class takes in a user input and prints out the square of the provided Integer
 * 
 * @author Jacques Plante
 * @since Week 2 of CSC301
 */
public class PlanteJacquesMod2InClass {
    /**
     * Main method of the class that executes the purpose of the class:
     * converting a user-provided Integer into the square of that Integer
     * @param args default param for main (not used)
     * @throws NumberFormatException when the user provided input is not an Integer
     *              The exception is not handled, as it is not handled in the Python file
     *              this is intended to copy.
     */
    public static void main(String[] args) {
        System.out.println("This program computes the square of an Integer\n");
        Scanner userInput = new Scanner(System.in);
        System.out.println("Enter an Integer: ");
        // Get user Input
        int n   = Integer.parseInt(userInput.nextLine()),
            acc = 0,
            odd = 1;
        // Loop from i to n and perform the arithmetic
        for (int i = 0; i < n; i++) {
            acc += odd;
            odd += 2;
        }

        // Format our string to include our n and acc variables
        String resultString = String.format("The square of %d is %d", n, acc);

        // Output to terminal
        System.out.println(resultString);
    }
}