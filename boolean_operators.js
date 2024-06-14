 // 1. Use comparison operators to compare two numbers and store the results in boolean variables.
 num1 = 10
 num2 = 20
 isGreater = num1 > num2
 isLess = num1 < num2
 isEqual = num1 == num2
 isNotEqual = num1!= num2

 fmt.Println("isGreater:", isGreater)
 fmt.Println("isLess:", isLess)
 fmt.Println("isEqual:", isEqual)
 fmt.Println("isNotEqual:", isNotEqual)

 // 2. Declare two variables x and y with the values 8 and 12 respectively.
 x = 8
 y = 12

 fmt.Println("Is x greater than y?", x > y)
 fmt.Println("Is x less than or equal to y?", x <= y)
 fmt.Println("Is x equal to y?", x == y)
 fmt.Println("Is x not equal to y?", x!= y)

 // 3. Declare the variables a and b with values true and false, determine and print the result of the following logical operations:
 a = true
 b = false

 fmt.Println("a AND b:", a && b)
 fmt.Println("a OR b:", a || b)
 fmt.Println("NOT a:", !a)

  // 4. Declare variable p and assign it a value of 10. Use the following assignment operators to modify the value of p with any number and print the result each time:
  p = 10

  fmt.Println("Initial value of p:", p)

  // +=
  p += 5
  fmt.Println("p += 5:", p)

  // -=
  p -= 1
  fmt.Println("p -= 1:", p)

  // *=
  p *= 2
  fmt.Println("p *= 2:", p)

  // /=
  p /= 4
  fmt.Println("p /= 4:", p)

  // %=
  p %= 3
  fmt.Println("p %= 3:", p)
