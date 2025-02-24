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
console.log(findMax(numbers)); // Output: 7, Time Complexity: O(n).

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
console.log(max(integers)); // Output: 22, Time Complexity: O(n).

// Challenge: Find the maximum number in the array, starting from the last element.

// Write a function called `reverseMax` that takes an array of numbers as an argument
// and returns the maximum number in the array starting from the last element.

const reverseMax = (arr) => {
    if(arr.length === 0) return null;
    const max = arr[0];

    for(let j = arr.length; j > 0; j--) {
        if(arr[i] < max) {
            max = arr[i];
        }
    }
    return max;
};

const inverseInt = [3, 38, 16, 21, 8, 56, 92];
console.log(reverseMax(inverseInt)); // Output: 92, Time Complexity: O(n).

// Challenge: Find the maximum number in the array.

// Write a function called "bigInt" that takes an long array of numbers as an argument.
// and returns the maximum number in the array.

const nums = [7, 4, 39, 16, 18, 22, 23, 15, 25, 36, 19, 112, 92, 873, 228, 592, 925, 48, 82, 61, 119, 429, 123];

const bigInt = (arr) => {
    if(arr.length === 0) return null;
    const max = arr[0];

    for(let i = 0; i < arr.length; i++) {
        if(arr[i] > max) {
            max = arr[i];
        }
    }
};

console.log(bigInt(nums)); // Output: 925, Time Complexity: O(n).