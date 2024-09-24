import java.util.Collections; // For use of the Java Collections Framework and its methods
import java.util.LinkedList; // For use of the Java LinkedList and its methods
import java.util.Scanner; // For use of reading user input

/**
 * A program that reads a list of integers from user input,
 * stores them in a LinkedList, and sorts them in ascending order.
 * 
 * <p>This program uses the Java Collections Framework to handle the
 * sorting of the LinkedList.</p>
 * 
 * <p>In order to run this program, run the following commands:</p>
 * <pre>
 * javac SortedLinkedList.java
 * java SortedLinkedList
 * </pre>
 * 
 * <p>In order to generate the javadoc for this code, run the following command:</p>
 * <pre>
 * javadoc -d doc -private SortedLinkedList.java
 * </pre>
 * 
 * <p>Documents can then be found in the generated doc/ folder</p>
 *
 * @author Jacques Plante
 * @since CSC6301 - Module 4
 */
public class SortedLinkedList {
    /**
     * A LinkedList that stores the integers read from user input.
     */
    private LinkedList<Integer> numbers;

    /**
     * <p>Constructs a SortedLinkedList object.</p>
     * Initializes the LinkedList that will store the integers.
     * This demonstrates code reuse by utilizing Java's existing
     * LinkedList implementation.
     */
    public SortedLinkedList() {
        this.numbers = new LinkedList<Integer>();
    }

    /**
     * Reads integers from user input using a Scanner. The user can
     * enter integers separated by spaces or new lines. Input ends
     * when the user types "done". Each integer entered is added to
     * the LinkedList {@link #numbers}.
     */
    private void readInput() {
        Scanner scanner = new Scanner(System.in);

        System.out.println("Enter a list of integers (type 'done' to finish):");
        System.out.println("You may separate by spaces or by hitting enter after each number.");

        /** Read integers from input until "done" is entered */
        while (scanner.hasNext()) {
            if (scanner.hasNextInt()) {
                /**
                 * If an integer, add it to our linked list using the add() method.
                 */
                numbers.add(scanner.nextInt());
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
     * Prints the sorted list of integers stored in {@link #numbers}
     * to the console.
     */
    private void outputList() {
        System.out.println("Sorted List: " + numbers);
    }

    /**
     * The entry point of the program. Creates an instance of
     * SortedLinkedList, reads user input, sorts the list using
     * {@link Collections#sort(List)}, and prints the sorted list.
     * 
     * @param args Command line arguments (not used).
     */
    public static void main(String[] args) {
        SortedLinkedList mainList = new SortedLinkedList();
        mainList.readInput();

        /**
         * Sorts the LinkedList in ascending order.
         * This demonstrates code reuse by utilizing the `Collections.sort` method,
         * which is a standard utility provided by the Java Collections Framework.
         * Instead of implementing a sorting algorithm manually, we leverage the
         * built-in, optimized sorting functionality of `Collections.sort`.
         */
        Collections.sort(mainList.numbers);

        mainList.outputList();
    }
}