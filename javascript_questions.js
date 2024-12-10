// 1 Calculate the sum of two numbers
function sum(a, b) {
    return a + b;
}
console.log(sum(5, 3)); // Output: 8

// 2 Calculate the square of a given number
function square(num) {
    return num * num;
}
console.log(square(4)); // Output: 16

// 3 Calculate the area of a rectangle
function areaOfRectangle(length, width) {
    return length * width;
}
console.log(areaOfRectangle(5, 3)); // Output: 15

// 4 Convert degrees Fahrenheit to Celsius and vice versa
function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}
function celsiusToFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}
console.log(fahrenheitToCelsius(100)); // Output: 37.77
console.log(celsiusToFahrenheit(37.777)); // Output: 100

// 5 Calculate the factorial of a positive integer
function factorial(n) {
    if (n === 0 || n === 1) return 1;
    return n * factorial(n - 1);
}
console.log(factorial(5)); // Output: 120

// 6 Find the maximum of three numbers
function maxOfThree(a, b, c) {
    return Math.max(a, b, c);
}
console.log(maxOfThree(5, 10, 7)); // Output: 10


// 7 Calculate the average of an array of numbers
function average(arr) {
    const sum = arr.reduce((total, num) => total + num, 0);
    return sum / arr.length;
}
console.log(average([1, 2, 3, 4, 5])); // Output: 3

// 8 Calculate the area of a circle
function areaOfCircle(radius) {
    return Math.PI * radius * radius;
}
console.log(areaOfCircle(3)); // Output: 28.274

// 9 Calculate the exponentiation of a base number to a given power
function power(base, exponent) {
    return Math.pow(base, exponent);
}
console.log(power(2, 3)); // Output: 8

// 10 Check if a given number is prime
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}
console.log(isPrime(7)); // Output: true
console.log(isPrime(4)); // Output: false
