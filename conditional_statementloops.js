



temperature = 20 

switch (true) {
case temperature < 0:
    fmt.Println("It's freezing!")
case 0 <= temperature && temperature <= 15:
    fmt.Println("It's cold.")
case 16 <= temperature && temperature <= 25:
    fmt.Println("It's mild.")
default:
    fmt.Println("It's warm.")
}


// Exercise 2

function checkDivisibility(number) {
    if (number % 2 === 0 && number % 3 === 0) {
        console.log("Divisible by both.");
    } else if (number % 2 === 0) {
        console.log("Divisible by 2.");
    } else if (number % 3 === 0) {
        console.log("Divisible by 3.");
    } else {
        console.log("Not divisible by 2 or 3.");
    }
}


function switchCase(number) {
    const remainder = (number % 2) + 2 * (number % 3);
    switch (remainder) {
        case 0:
            console.log("Not divisible by 2 or 3.");
            break;
        case 1:
            console.log("Divisible by 2.");
            break;
        case 2:
            console.log("Divisible by 3.");
            break;
        case 3:
            console.log("Divisible by both.");
            break;
        default:
            console.log("Invalid input.");
    }
}

// Exercise 3
 for (let i = 1; i <= 10; i++) {
    console.log(i);
}

//Print all even numbers between 1 and 20:
for (let i = 2; i <= 20; i += 2) {
    console.log(i);
}

//alculate the sum of all numbers from 1 to 100:
let sum = 0;
for (let i = 1; i <= 100; i++) {
    sum += i;
}
console.log("Sum of numbers from 1 to 100:", sum);

//Print each element of the array [1, 2, 3, 4, 5]
const numbers = [1, 2, 3, 4, 5];
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

//Find and print the largest number in the array [3, 7, 2, 5, 10, 6]:
const numbersArray = [3, 7, 2, 5, 10, 6];
let largestNumber = numbersArray[0]; // Assume the first number is the largest

for (let i = 1; i < numbersArray.length; i++) {
    if (numbersArray[i] > largestNumber) {
        largestNumber = numbersArray[i];
    }
}


//Exercise 4 while loops

//Print numbers from 1 to 10:
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

//Print all even numbers between 1 and 20:
for (let i = 2; i <= 20; i += 2) {
    console.log(i);
}

//Calculate the sum of all numbers from 1 to 100:
 sum = 0;
for (let i = 1; i <= 100; i++) {
    sum += i;
}
console.log("Sum of numbers from 1 to 100:", sum);


//Print all multiples of 5 less than 50:
for (let i = 5; i < 50; i += 5) {
    console.log(i);
}


//Exercise 5 Do While loops

// Print numbers from 1 to 10:
let count = 1;
while (count <= 10) {
    console.log(count);
    counti++;
}

//Calculate the sum of all numbers from 1 to 100: sum = 0;
let i = 1;
do {
    sum += i;
    i++;
} while (i <= 100);
console.log("Sum of numbers from 1 to 100:", sum);


//Prompt the user to enter a number greater than 10:
let userInput;
do {
    userInput = parseInt(prompt("Enter a number greater than 10:"));
} while (isNaN(userInput) || userInput <= 10);

console.log("Valid input:", userInput);



// Game



        // Generate a random number between 1 and 10
         rand = new Random();
         numberToGuess = rand.nextInt(10) + 1;

        // Initialize a variable to track the number of attempts
         attempts = 0;

        // Create a scanner to read user input
         scanner = new Scanner(System.in);

        while (true) {
            // Ask the user to guess a number
            console.log("Guess a number between 1 and 10: ");
             userGuess = scanner.nextInt();

            // Increment the number of attempts
            attempts++;

            // Check if the user's guess is correct
            if (userGuess == numberToGuess) {
                console.log("Congratulations! You guessed the correct number in " + attempts + " attempts.");
                break;
            } else {
                console.log("Try again!");
            }
        }
    




