import java.util.Scanner;
/**
 * The {@code RockPaperScissors} class implements a simple command-line game
 * where the user can play Rock-Paper-Scissors against a randomly selected 
 * computer choice. The user is prompted to enter their choice, and the game
 * determines the outcome based on standard rules: Rock beats Scissors, Scissors 
 * beats Paper, and Paper beats Rock. 
 *
 * <p>The valid inputs for the game are:
 * <ul>
 *     <li>{@code "r"} for Rock</li>
 *     <li>{@code "s"} for Scissors</li>
 *     <li>{@code "p"} for Paper</li>
 * </ul>
 * The game continues to prompt the user until they enter a valid choice.
 *
 * <p>This class demonstrates basic Java concepts such as input handling,
 * conditionals, and random number generation. It uses a simple loop for 
 * input validation and utilizes a {@code Scanner} for reading user input.
 *
 * @author [Your Name]
 * @version 1.0
 * @since 2024-10-13
 */
public class RSP {
    /**
     * a list of the valid user inputs
     */
    private static String[] valid = {"r", "s", "p"};

    /**
     * Checks if the user provided input string is in the valid responses.
     * 
     * @param input : user provided input string
     * @return boolean true or false if found in the valid array
     */
    private static boolean isValid (String input) {
        for (String s : valid) {
            if (s.equals(input)) {
                return true;
            }
        }

        return false;
    }

    /**
     * Main function of the RSP program that gets a user input as r, s, or p and randomly chooses one to compare to.
     * Then, it takes that comparison and determines whether the user won, lost or tied.
     * @param args
     */
    public static void main(String[] args) {
        String guess = "";
        Scanner userInput = new Scanner(System.in);
        while (true) {
            System.out.println("Enter (r)ock, (s)cissors, or (p)aper: ");
            guess = userInput.nextLine();

            if (!isValid(guess)) {
                System.out.println("Only 'r', 's', or 'p' are valid inputs! Please try again.");
                guess = "";
            } else {
                break;
            }
        }

        double rand = Math.random();
        String comp = "";
        
        if (rand < (1.0/3)) {
            comp = "r";
        } else if (rand < (2.0/3)) {
            comp = "s";
        } else {
            comp = "p";
        }

        if (guess.equals(comp)) {
            System.out.println("It's a tie!");
        } else if (
            (guess.equals("r") && comp.equals("p")) ||
            (guess.equals("s") && comp.equals("r")) ||
            (guess.equals("p") && comp.equals("s"))
        ) {
            System.out.println("Sorry, you lost as I had " + comp);
        } else {
            System.out.println("Congrats, you won as I had " + comp);
        }

        userInput.close();
    }
};
