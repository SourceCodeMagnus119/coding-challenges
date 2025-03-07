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

// Challenge: Find the minimum number in the arrays Then add the final values together and return them.

// Write a function called "sum" that takes two arrays of numbers as arguments
// and returns the sumproduct of the minimum number in each array

const int1 = [1000, 480, 522, 314, 872, 592, 222, 572, 1902, 50002, 1847, 29948, 333013, 29384, 22, 3852];
const int2 = [9, 22, 66, 25, 31, 66, 73, 112, 73, 8, 6,  2, 424, 980, 33, 225,11123, 55253, 63, 342, 647, 885];

const sum = (arr1, arr2) => {
    if(arr1.length === 0 || arr2.length === 0) return null;
    const min1 = arr1[0];
    const min2 = arr2[0];

    for(let i = 0; i < arr1.length; i++) {
        if(arr1[i] < min1) {
            min1 = arr1[i];
        }
    }

    for(let j = 0; i < arr2.length; j++) {
        if(arr2[j] < min2) {
            min2 = arr2[j];
        }
    }
    const output = min1 * min2;
    return output;
};

console.log(sum(int1, int2)); // Output: 198, Time Complexity: O(n).

// Challenge: Find the maximum number in the array then return as a String.

// Write a function called "sumString" that takes an array as an argument
// and returns the maximum number in the array then converts it to a string.

const ints = [2500, 800, 5399, 299, 910, 900, 2192, 3500, 182, 11185, 92, 192, 182, 90, 42, 33, 8279, 1020, 2899, 86, 272, 18, 98, 281904, 2845, 2374, 288489, 2283497, 274298, 2323, 897505, 385027, 1749284, 2749283, 42805];

const sumString = (arr) => {
    if(arr.length === 0) return null;
    const max = arr[0];

    for(let i = 0; i < arr.length; i++) {
        if(arr[i] > max) {
            max = arr[i];
        }
    }
    const string = max.toString();
    return string;
}

console.log(sumString(ints)); // Output: 2749268, Time Complexity: 0(n).

// CodingChallenge: Find the maximum number in the array then return split.

// Write a function called "maxSum" that takes an array as an argument.
// adn returns the maximum number in the array.

const maxSum = (arr) => {
    if(arr.length === 0) return null;
    const max = arr[0];

    for(let j = arr.length; j > 0; j__) {
        if(arr[j] > max) {
            max = arr[i];
        }
    }
    const split = max.toString("").split();
    return split;
}

const sums = [123, 456, 789, 101112, 131415, 161718, 192021, 222324, 252627, 282930, 313233, 343536, 373839, 404142, 434445, 464748, 495051, 525354, 555657, 585960];
console.log(maxSum(sums)) // Output: 585960, Time Complexity: 0(n)

// Challenge: Find the second smallest number in the array.

// Write a function called 'secMin' that takes an array as an argument
// and returns the second smallest number in the array.

const secMin = (arr) => {
    if(arr.length === 0) return null;
    const min = arr[0];

    for(let i = 0; i < arr.length; i++) {
        if(arr[i] > min) {
            min = arr[i];
        }
    }
    return min;
};

const vals = [3, 2, 5, 6, 7, 2, 1, 1, 9, 7, 65, 4, 7, 4, 2];
console.log(secMin(vals)); // Output: 2 Time Complexity: 0(n).

// Challenge: Find the Minumum number in the array from the last indices.

// Write a function called 'small' that takes an array as an argument
// and returns the minimum number in the array starting from the last element.

const small = (arr) => {
    if(arr.length === 0) return null;
    const min = arr[0];

    for(let i = arr.length; i > 0; i++) {
        if(arr[i] < min) {
            min = arr[i];

            Math.random(min * 2);
        }
    }
    return min.toString();
};

const nmb = [1, 22, 45, 3, 4, 24, 5, 21, 44, 6, 78, 54, 3, 7, 3, 65];
console.log(small(nmb)); // Output: 2, Time Complexity: 0(n).

// Challenge: Find the minimum number in the array then return as a randomized String.

// Write a function called 'minString' that takes an array as an argumenr
// and returns the minimum number in the array then converts it to a 64-bit string.

const arr = [200, 120 , 499, 92, 599, 201, 940, 699, 20, 188, 192, 182, 90, 42, 33, 379];

const minString = (arr) => {
    if(arr.length === 0) return null;
    const min = arr[0];

    for(let i = 0; i < arr.length; i++) {
        if(arr[i] < min) {
            min = arr[i];
            const convert = min.toString(64);

            const dynamicArr = new Float64Array(convert);
            const randomStr = Math.floor(Math.random() * dynamicArr.length);
            return randomStr;
        }
    }
}

console.log(minString(arr)); // Output: 2, Time Complexity: 0(n).