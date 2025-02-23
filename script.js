function addNumbers(a, b) {
    return a + b;
}

let num1 = prompt("Enter a number:");
let num2 = prompt("Enter another number:");

num1 = Number(num1);
num2 = Number(num2);

alert("The sum of the two numbers is " + addNumbers(num1, num2));
