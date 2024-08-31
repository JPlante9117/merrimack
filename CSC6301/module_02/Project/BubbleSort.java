
/**
 * The BubbleSort class runs the bubble sorting algorithm on a statically provided array.
 * It then proceeds to print out that array in ascending order to the terminal.
 * @author Jacques Plante
 * @version 1.0.0
 * @since Week 2 of CSC6301
 */
public class BubbleSort {
    /**
     * Sorts a provided array into ascending order using the Bubble Sort methodology
     * @param arr an array of integers to be sorted
     */
    private void bubbleSort(int[] arr) {
        int len = arr.length;

        // Outer loop iterating through the array i times
        for (int i = 0; i < len - 1; i++) {
            // Inner loop iterating through the non-sorted items
            for(int j = 0; j < len - i - 1; j++) {
                if (arr[j] > arr[j + 1]) {
                    int temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                }
            }
        }
    }

    /**
     * Prints the provided array to the terminal
     * @param arr an array of Integers to be printed
     */
    private void printArr(int[] arr) {
        int len = arr.length;
        for (int i = 0; i  < len; i++) {
            System.out.println(arr[i] + " ");
        }
        System.out.println();
    }
    /**
     * Creates an instance of BubbleSort and runs the bubbleSort method on a provided array.
     * Then proceeds to print it out to the console in sorted order.
     * @param args default param in for main (unused)
     */
    public static void main(String[] args) {
        BubbleSort instance = new BubbleSort();
        int[] myArr = {2, 45, 37, 21, 31, 50, 29, 22, 67, 88, 56};
        instance.bubbleSort(myArr);
        System.out.println("The sorted array is: ");
        instance.printArr(myArr);
    }
}
