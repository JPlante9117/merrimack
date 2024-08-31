import java.util.Scanner;

/**
 * C++ converted to Java Class for the Week 2 Project.
 * Takes in a user input and determines whether it is a Prime Number.
 * @author Jacques Plante - VSCode
 * @since Week 2 CSC6303
 */
public class DeterminePrime {
    /**
     * Checks whether or not a provided integer is prime.
     * @param n an Integer to check
     * 
     * @return boolean of if Integer n is prime
     */
    private Boolean isPrime(int n) {
        if (n <= 1) {
            return false;
        }

        if (n <= 3) {
            return true;
        }

        if (n % 2 == 0 || n % 3 == 0) {
            return false;
        }
        for (int i = 5; i * i <= n; i += 6) {
            if (n % i == 0 || n % (i + 2) == 0) {
                return false;
            }
        }
        return true;
    }
    /**
     * Provides instructions to the user on what information to provide.
     * Then checks the user input against the isPrime method to determine
     * if the provided Integer is indeed a Prime number
     * 
     * @param args default param provided to main (unused)
     */
    public static void main(String[] args) {
        DeterminePrime instance = new DeterminePrime();
        int number;
        do {
            // Set up scanner for user input reading
            Scanner userInput = new Scanner(System.in);
            System.out.println("Enter a positive number (0 or negative to exit): ");
            // Read user input
            number = Integer.parseInt(userInput.nextLine());
            // Break if 0 or less
            if (number <= 0) {
                break;
            }
            // Otherwise determine if prime
            if (instance.isPrime(number)) {
                System.out.println(String.format("%d is a prime number.", number));
            } else {
                System.out.println(String.format("%d is not a prime number.", number));
            }
        } while (true);
    }
}
