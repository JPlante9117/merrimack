import java.util.Collections; // For use of the Java Collections Framework and its methods
import java.util.Stack; // For use of the Java Stack and its methods
import java.util.Scanner; // For use of reading user input

/**
 * A program that reads a list of integers from user input,
 * stores them in a Stack, and sorts them in ascending order.
 * 
 * <p>This program uses the Java Collections Framework to handle the
 * sorting of the Stack.</p>
 * 
 * <p>In order to run this program, run the following commands:</p>
 * <pre>
 * javac SortedStack.java
 * java SortedStack
 * </pre>
 * 
 * <p>In order to generate the javadoc for this code, run the following command:</p>
 * <pre>
 * javadoc -d doc -private SortedStack.java
 * </pre>
 * 
 * <p>Documents can then be found in the generated doc/ folder</p>
 *
 * @author Jacques Plante
 * @since CSC6301 - Module 4
 */
public class SortedStack {
    /**
     * A Stack that stores the integers read from user input.
     */
    private Stack<Integer> numbers;

    /**
     * <p>Constructs a SortedStack object.</p>
     * Initializes the Stack that will store the integers.
     * This demonstrates code reuse by utilizing Java's existing
     * Stack implementation.
     */
    public SortedStack() {
        this.numbers = new Stack<Integer>();
    }

    /**
     * Reads integers from user input using a Scanner. The user can
     * enter integers separated by spaces or new lines. Input ends
     * when the user types "done". Each integer entered is added to
     * the Stack {@link #numbers}.
     */
    private void readInput() {
        Scanner scanner = new Scanner(System.in);

        System.out.println("Enter a list of integers (type 'done' to finish):");
        System.out.println("You may separate by spaces or by hitting enter after each number.");

        /** Read integers from input until "done" is entered */
        while (scanner.hasNext()) {
            if (scanner.hasNextInt()) {
                /**
                 * If an integer, add it to our Stack using the push() method.
                 */
                numbers.push(scanner.nextInt());
            } else {
                /**
                 * If not an integer, read as a string
                 */
                String input = scanner.next();
                if (input.equalsIgnoreCase("done")) {
                    /** Break if "done" was found */
                    break;
                } else {
                    /** Send error out to user if not "done" */
                    System.out.println("Invalid input. Please enter an integer or 'done' to finish.");
                }
            }
        }

        /**
         * Close the Scanner.
         * This utilizes the Scanner's built-in close() method
         */
        scanner.close();
    }

    /**
     * Prints the sorted Stack of integers stored in {@link #numbers}
     * to the console.
     */
    private void outputStack() {
        System.out.println("Sorted Stack: " + numbers);
    }

    /**
     * The entry point of the program. Creates an instance of
     * SortedStack, reads user input, sorts the Stack using
     * {@link Collections#sort(List)}, and prints the sorted Stack.
     * <br/>
     * NOTE: Typically sorting a Stack defeats the purpose of the Data Structure's 
     * Last-In-First-Out format, though since the assignment calls for the sorting
     * of this item, we are going to sort it in this main function.
     * 
     * @param args Command line arguments (not used).
     */
    public static void main(String[] args) {
        SortedStack mainStack = new SortedStack();
        mainStack.readInput();

        /**
         * Sorts the Stack in ascending order.
         * This demonstrates code reuse by utilizing the `Collections.sort` method,
         * which is a standard utility provided by the Java Collections Framework.
         * Instead of implementing a sorting algorithm manually, we leverage the
         * built-in, optimized sorting functionality of `Collections.sort`.
         */
        Collections.sort(mainStack.numbers);

        mainStack.outputStack();
    }
}