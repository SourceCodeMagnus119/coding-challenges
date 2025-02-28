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
    return max
};

console.log(bigInt(nums)); // Output: 925, Time Complexity: O(n).

// Challenge: Find the minimum number in the array.

// Write a function called "min" that takes an array of numbers as an argument
// and returns the minimum number in the array.

const min = (arr) => {
    if(arr.length === 0) return null;
    const min = arr[0];

    for(let i = 0; i < arr.length; i++) {
        if(arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
};

const val = [2, 6, 1];
console.log(min(val)); // Output: 1, Time Complexity: O(n).

// Challenge: Find the Minimum number in the array.

// Write a function called "findMin" that takes an array of numbers as an argument
// and returns the minimum number in the array.

const findMin = (arr) => {
    if(arr.length ===0) return null;
    const min = arr[0];

    for(let i = arr.length; i > 0; i++) {
        if(arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
}

const dec = [1.0210111329242231, 1.0210111329242231, 1.0210111329242231, 3.29108300291840145101, 1.19102948201001924, 1.089479253198942, 1.19048924893579375201, 1.209348024808520385729277 ];
console.log(findMin(dec)); //Output: 1.0210111329242231, Time Complexity: O(n).

// Challenge: Find the minimum number in the array.

// Write a function called "reverseMin" that takes an array of numbers as an argument
// and returns the minimum number in the array starting from the last element.

const reverseMin = (arr) => {
    if(arr.length === 0) return null;
    const min = arr[0];

    for(let i = arr.length; i > 0; i++) {
        if(arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
};

const int = [2, 6, 1, 6, 3, 8, 1, 8, 94, 12, 2, 76, 2, 1, 8, 2, 1];
console.log(reverseMin(int)); // Output: 1, Time Complexity: O(n).