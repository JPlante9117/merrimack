package main

import "fmt"

func inArray(arr []string, str string) bool {
	for _, element := range arr {
		if element == str {
			return true
		}
	}

	return false
}

func letter(score int) string {
	grade := ""
	if score >= 90 {
		grade = "A"
	} else if score >= 80 {
		grade = "B"
	} else if score >= 70 {
		grade = "C"
	} else {
		grade = "F"
	}

	if score % 10 >= 7 && !inArray([]string{"A", "F"}, grade) {
		grade += "+"
	} else if score % 10 <= 3 && grade != "F" {
		grade += "-"
	}

	return grade
}

func main() {
	fmt.Println(letter(94))
	fmt.Println(letter(31))
	fmt.Println(letter(82))
	fmt.Println(letter(99))
	fmt.Println(letter(79))
	fmt.Println(letter(90))
	fmt.Println(letter(85))
}