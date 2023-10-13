//  ? Chapter 35-38
// ! Ans 01
function displayCurrentDateTime() {
var currentDate = new Date();
var dateTimeString = "Current Date and Time: " + currentDate.toString();
document.write("<h2>Current Date and Time</h2>");
document.write(dateTimeString);
}
displayCurrentDateTime();
// ! Ans 02
function greetUser(firstName, lastName) {
var fullName = firstName + " " + lastName;
var greeting = "Hello, " + fullName + "!";
document.write("<h2>Greeting</h2>");
document.write(greeting);
}
var userFirstName = "John";
var userLastName = "Doe"; 
greetUser(userFirstName, userLastName);
// ! Ans 03
function addNumbers() {
var num1 = parseFloat(prompt("Enter the first number:"));
var num2 = parseFloat(prompt("Enter the second number:"));
if (isNaN(num1) || isNaN(num2))
    {
    return "Invalid input. Please enter valid numbers.";
    }

var sum = num1 + num2;
return sum;
}
var result = addNumbers();
document.write("<h2>Sum of Two Numbers</h2>");
document.write("Result: " + result);
// ! Ans 04
function calculate(num1, num2, operator) {
    var result;
    switch (operator) {
    case "+":
    result = num1 + num2;
    break;
    case "-":
    result = num1 - num2;
    break;
    case "*":
    result = num1 * num2;
    break;
    case "/":
    if (num2 === 0) {
    return "Division by zero is not allowed.";
    }
    result = num1 / num2;    
    break;
    default:
    return "Invalid operator. Please use +, -, *, or /.";
    }
return result;
}
var num1 = 10; 
var num2 = 5;  
var operator = "+"; 
var result = calculate(num1, num2, operator);
document.write("<h2>Calculator</h2>");
document.write("Result: " + result);
// ! Ans 05
function square(number) {
return number * number;
}
var num = 5;
var result = square(num);
document.write("<h2>Square of a Number</h2>");
document.write("The square of " + num + " is " + result);
// ! Ans 06
function factorial(number) {
    if (number < 0) {
    return "Factorial is not defined for negative numbers.";
    } else if (number === 0) {
    return 1;
    } else {
    var result = 1;
    for (var i = 1; i <= number; i++) {
    result *= i;
    }
    return result;
    }
}
var num = 5;
var result = factorial(num);
document.write("<h2>Factorial of a Number</h2>");
document.write("The factorial of " + num + " is " + result);
// ! Ans 07
function displayCounting(start, end) {
if (start <= end) {
for (var i = start; i <= end; i++) {
document.write(i + "<br>");
}
} else {
document.write("Start number must be less than or equal to the end number.");
}
}
var startNumber = 1;
var endNumber = 10;
displayCounting(startNumber, endNumber);
// ! Ans 08
function calculateHypotenuse(base, perpendicular) {

function calculateSquare(number) {
return number * number;
}
var baseSquared = calculateSquare(base);
var perpendicularSquared = calculateSquare(perpendicular);
var hypotenuse = Math.sqrt(baseSquared + perpendicularSquared)
return hypotenuse;
}
var base = 3;
var perpendicular = 4;
var result = calculateHypotenuse(base, perpendicular);
document.write("<h2>Hypotenuse of a Right-Angled Triangle</h2>");
document.write("Base: " + base + "<br>");
document.write("Perpendicular: " + perpendicular + "<br>");
document.write("Hypotenuse: " + result);
// ! Ans 09
// todo PASSING ARGUMENTS AS VALUES:
function calculateRectangleAreaWithValue(width, height) {
var area = width * height;
return area;
}

var widthValue = 5;
var heightValue = 8;
var areaValue = calculateRectangleAreaWithValue(widthValue, heightValue);

document.write("<h2>Rectangle Area (Arguments as Values)</h2>");
document.write("Width: " + widthValue + "<br>");
document.write("Height: " + heightValue + "<br>");
document.write("Area: " + areaValue);

// todo PASSING ARGUMENTS AS VARIABLES:
function calculateRectangleAreaWithVariables(width, height) {
var area = width * height;
return area;
}
var widthVariable = 5;
var heightVariable = 8;
var areaVariable = calculateRectangleAreaWithVariables(widthVariable, heightVariable);

document.write("<h2>Rectangle Area (Arguments as Variables)</h2>");
document.write("Width: " + widthVariable + "<br>");
document.write("Height: " + heightVariable + "<br>");
document.write("Area: " + areaVariable);
// ! Ans 10
function isPalindrome(str) {
str = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

var reversedStr = str.split('').reverse().join('');

return str === reversedStr;
}
var testString = "madam";
var isPalindromic = isPalindrome(testString);

document.write("<h2>Palindrome Check</h2>");
document.write("String: " + testString + "<br>");
document.write("Is Palindrome: " + (isPalindromic ? "Yes" : "No"));
// ! Ans 11
function titleCase(str) {
var words = str.split(" ");
for (var i = 0; i < words.length; i++) {
var word = words[i];
words[i] = word.charAt(0).toUpperCase() + word.slice(1);
}
return words.join(" ");
}
var inputString = 'the quick brown fox';
var titleCasedString = titleCase(inputString);

document.write("<h2>Title Case Conversion</h2>");
document.write("Original String: " + inputString + "<br>");
document.write("Converted String: " + titleCasedString);
// ! Ans 12
function findLongestWord(str) {
var words = str.split(" ");
var longestWord = "";    
for (var i = 0; i < words.length; i++) {
if (words[i].length > longestWord.length) {
longestWord = words[i];
}
}    
return longestWord;
}
var inputString = 'Web Development Tutorial';
var longestWord = findLongestWord(inputString);

document.write("<h2>Longest Word in a String</h2>");
document.write("Original String: " + inputString + "<br>");
document.write("Longest Word: " + longestWord);
// ! Ans 13
function countLetterOccurrences(str, letter) {
var count = 0;
for (var i = 0; i < str.length; i++) {
if (str.charAt(i) === letter) {
count++;
}
}
return count;
}
var inputString = 'JSResourceS.com';
var searchLetter = 'o';

var occurrences = countLetterOccurrences(inputString, searchLetter);

document.write("<h2>Letter Occurrence Count</h2>");
document.write("String: " + inputString + "<br>");
document.write("Letter to Count: " + searchLetter + "<br>");
document.write("Number of Occurrences: " + occurrences);
// ! Ans 14
function calcCircumference(radius) {
var circumference = 2 * Math.PI * radius;
document.write("<h2>Circle Properties</h2>");
document.write("The circumference is " + circumference.toFixed(2));
}
function calcArea(radius) {
var area = Math.PI * radius * radius;
document.write("The area is " + area.toFixed(2));
}
var radius = 5;
calcCircumference(radius);
calcArea(radius);
