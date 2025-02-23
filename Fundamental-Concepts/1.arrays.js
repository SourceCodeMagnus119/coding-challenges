// Challenge: Find the Maximum Number in an Array

// Write a function called `findMax` that takes an array of numbers as an argument
// and returns the maximum number in the array.

// Example:
// Input: [1, 3, 7, 2, 5]
// Output: 7-

function findMax(arr) {
    if (arr.length === 0) return null; // Handle empty array case
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

// Test the function
const numbers = [1, 3, 7, 2, 5];
console.log(findMax(numbers)); // Output: 7

// Challenge: Find the maximum number in the array.

// Write a function called `max` that takes an array of numbers as an argument
// and returns the maximum number in the array.

const integers = [12, 3, 2, 9, 22];

const max = (arr) => {
    if(arr.length === 0) return null;
    const max = arr[0];
    
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] > max) {
            max == arr[i];
        }
    }
    return max;
}
console.log(max(integers)); // Output: 22

// Challenge: Find the maximum number in the array, starting from the last element.

// Write a function called `reverseMax` that takes an array of numbers as an argument
// ad returns the maximum number in the array starting from the last element.

const reverseMax = (arr) => {
    if(arr.length === 0) return null;
    const max = arr[0];

    for(let j = arr.length; j > 0; j__) {
        if(arr[i] < max) {
            max = arr[i];
        }
    }
    return max;
};

const inverseInt = [3, 38, 16, 21, 8, 56, 92];
console.log(reverseMax(inverseInt));