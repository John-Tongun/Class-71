// Author John Tongun Wani <John-Tongun-Wani>

const numbers = [
     12, 7.45, 98, 3.14, 56, 42.8, 19, 73.21, 5, 64.9,
    28, 91.33, 14, 8.6, 37, 60.12, 2, 77.5, 49, 11.09,
    83, 25.7, 6, 94.44, 31, 16.8, 70, 53.26, 9, 88.1
];

/*
challenge:
1. How many numbers are less than 45.67?
2. How many numbers are greater than 59.98?
*/

let lessnumber = 45.67;
let countergreater = 59.98;

for ( let i = 0; i < numbers.length; i++) {
    if (Number.isInteger(numbers[i])) {
        lessnumber++;
    }   
}   
 console.log(` The total of integer numbers is: ${intNumbers}`);

let floatNumbers = 0;
for ( let i = 0; i < numbers.length; i++) {
    if (!Number.isInteger(numbers[i])) {
        floatNumbers++;
    }
}
console.log(` The total of float numbers is: ${floatNumbers}`);
