// Using var:
// যখন প্রোগ্রামের বিভিন্ন জায়গায় একই নামের ভেরিয়েবল ব্যবহার করতে হবে
// বা ভেরিয়েবলের স্কোপের সাথে সম্পর্কে আগের জ্যাকুরিয়াস থাকতে হবে।

var x = 10;
var y = 20;

function add() {
    var result = x + y;
    console.log(result);
}

add(); // Output: 30

// Using let:
// যখন একটি ভেরিয়েবলের স্কোপ নিজের ব্লকের মধ্যে রাখতে হবে, এবং যেটা ব্লকের বাইরে ব্যবহৃত হবে না

if (true) {
    let message = "Hello";
    console.log(message); // Output: "Hello"
}

console.log(message); // Error: message is not defined

// Using const:
// যখন একটি ভেরিয়েবলের মান পরিবর্তন হবে না বা যদি মান পরিবর্তন হয় তখন এর মান পরিবর্তন হবে না।

const PI = 3.1416;
PI = 3.14; // Error: Assignment to constant variable.



// Function to perform calculation
function calculate(number1, operator, number2) {
    let result;
    
    // Check if inputs are valid numbers
    if (isNaN(number1) || isNaN(number2)) {
        return 'Invalid input';
    }
    
    // Perform calculation based on operator
    switch(operator) {
        case '+':
            result = number1 + number2;
            break;
        case '-':
            result = number1 - number2;
            break;
        case '*':
            result = number1 * number2;
            break;
        case '/':
            // Check for division by zero
            if (number2 === 0) {
                return 'Division by zero error';
            }
            result = number1 / number2;
            break;
        default:
            return 'Invalid operator';
    }
    
    return result;
}

// Example usage
console.log(calculate(5, '+', 3));  // Output: 8
console.log(calculate(10, '/', 2)); // Output: 5
console.log(calculate(4, '*', 0));  // Output: 0
console.log(calculate(8, '-', 'abc')); // Output: 'Invalid input'
console.log(calculate(10, '/', 0)); // Output: 'Division by zero error'
console.log(calculate(5, '%', 3));  // Output: 'Invalid operator'
