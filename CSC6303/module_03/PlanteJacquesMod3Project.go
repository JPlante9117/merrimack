package main

import "fmt"

/**
 * Jacques Plante - VSCode
 * Module 3 Project
 */
func tribonacci(n int) []int {
	if n <= 0 {
		return []int{}
	} else if n == 1 {
		return []int{0}
	} else if n == 2 {
		return []int{0, 1}
	} else {
		fib_seq := []int{1, 1, 1}
		for index := 3; index < n; index++ {
			next_num := fib_seq[index-1] + fib_seq[index-2] + fib_seq[index-3]
			fib_seq = append(fib_seq, next_num)
		}

		return fib_seq
	}
}

func main() {
	fmt.Println(tribonacci(20))
}
