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
    let max = arr[0];

    for(let j = arr.length; j > 0; j--) {
        if(arr[j] < max) {
            max = arr[j];
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
    let max = arr[0];

    for(let i = 0; i < arr.length; i++) {
        if(arr[i] > max) {
            max = arr[i];
        }
    }
    return max
};

console.log(bigInt(nums)); // Output: 925, Time Complexity: O(n).

// Challenge: Find the min2imum number in the array.

// Write a function called "min2" that takes an array of numbers as an argument
// and returns the min2imum number in the array.

const min2 = (arr) => {
    if(arr.length === 0) return null;
    let min2 = arr[0];

    for(let i = 0; i < arr.length; i++) {
        if(arr[i] < min2) {
            min2 = arr[i];
        }
    }
    return min2;
};

const val = [2, 6, 1];
console.log(min2(val)); // Output: 1, Time Complexity: O(n).

// Challenge: Find the Min2imum number in the array.

// Write a function called "findMin2" that takes an array of numbers as an argument
// and returns the min2imum number in the array.

const findMin2 = (arr) => {
    if(arr.length ===0) return null;
    let min2 = arr[0];

    for(let i = arr.length; i > 0; i++) {
        if(arr[i] < min2) {
            min2 = arr[i];
        }
    }
    return min2;
}

const dec = [1.0210111329242231, 1.0210111329242231, 1.0210111329242231, 3.29108300291840145101, 1.19102948201001924, 1.089479253198942, 1.19048924893579375201, 1.209348024808520385729277 ];
console.log(findMin2(dec)); //Output: 1.0210111329242231, Time Complexity: O(n).

// Challenge: Find the min2imum number in the array.

// Write a function called "reverseMin2" that takes an array of numbers as an argument
// and returns the min2imum number in the array starting from the last element.

const reverseMin2 = (arr) => {
    if(arr.length === 0) return null;
    let min2 = arr[0];

    for(let i = arr.length; i > 0; i++) {
        if(arr[i] < min2) {
            min2 = arr[i];
        }
    }
    return min2;
};

const int = [2, 6, 1, 6, 3, 8, 1, 8, 94, 12, 2, 76, 2, 1, 8, 2, 1];
console.log(reverseMin2(int)); // Output: 1, Time Complexity: O(n).

// Challenge: Find the min2imum number in the arrays Then add the final values together and return them.

// Write a function called "sum" that takes two arrays of numbers as arguments
// and returns the sumproduct of the min2imum number in each array

const int1 = [1000, 480, 522, 314, 872, 592, 222, 572, 1902, 50002, 1847, 29948, 333013, 29384, 22, 3852];
const int2 = [9, 22, 66, 25, 31, 66, 73, 112, 73, 8, 6,  2, 424, 980, 33, 225,11123, 55253, 63, 342, 647, 885];

const sum = (arr1, arr2) => {
    if(arr1.length === 0 || arr2.length === 0) return null;
    let min21 = arr1[0];
    let min22 = arr2[0];

    for(let i = 0; i < arr1.length; i++) {
        if(arr1[i] < min21) {
            min21 = arr1[i];
        }
    }

    for(let j = 0; i < arr2.length; j++) {
        if(arr2[j] < min22) {
            min22 = arr2[j];
        }
    }
    const output = min21 * min22;
    return output;
};

console.log(sum(int1, int2)); // Output: 198, Time Complexity: O(n2).

// Challenge: Find the maximum number in the array then return as a String.

// Write a function called "sumString" that takes an array as an argument
// and returns the maximum number in the array then converts it to a string.

const ints = [2500, 800, 5399, 299, 910, 900, 2192, 3500, 182, 11185, 92, 192, 182, 90, 42, 33, 8279, 1020, 2899, 86, 272, 18, 98, 281904, 2845, 2374, 288489, 2283497, 274298, 2323, 897505, 385027, 1749284, 2749283, 42805];

const sumString = (arr) => {
    if(arr.length === 0) return null;
    let max = arr[0];

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
    let max = arr[0];

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

// Write a function called 'secMin2' that takes an array as an argument
// and returns the second smallest number in the array.

const secMin2 = (arr) => {
    if(arr.length === 0) return null;
    let min2 = arr[0];

    for(let i = 0; i < arr.length; i++) {
        if(arr[i] > min2) {
            min2 = arr[i];
        }
    }
    return min2;
};

const vals = [3, 2, 5, 6, 7, 2, 1, 1, 9, 7, 65, 4, 7, 4, 2];
console.log(secMin2(vals)); // Output: 2 Time Complexity: 0(n).

// Challenge: Find the Min2umum number in the array from the last indices.

// Write a function called 'small' that takes an array as an argument
// and returns the min2imum number in the array starting from the last element.

const small = (arr) => {
    if(arr.length === 0) return null;
    let min2 = arr[0];

    for(let i = arr.length; i > 0; i++) {
        if(arr[i] < min2) {
            min2 = arr[i];

            Math.random(min2 * 2);
        }
    }
    return min2.toString();
};

const nmb = [1, 22, 45, 3, 4, 24, 5, 21, 44, 6, 78, 54, 3, 7, 3, 65];
console.log(small(nmb)); // Output: 2, Time Complexity: 0(n).

// Challenge: Find the min2imum number in the array then return as a randomized String.

// Write a function called 'min2String' that takes an array as an argumenr
// and returns the min2imum number in the array then converts it to a 64-bit string.

const arr = [200, 120 , 499, 92, 599, 201, 940, 699, 20, 188, 192, 182, 90, 42, 33, 379];

const min2String = (arr) => {
    if(arr.length === 0) return null;
    let min2 = arr[0];

    for(let i = 0; i < arr.length; i++) {
        if(arr[i] < min2) {
            min2 = arr[i];
            let convert = min2.toString(64);

            let dynamicArr = new Float64Array(convert);
            let randomStr = Math.floor(Math.random() * dynamicArr.length);
            return randomStr;
        }
    }
}

console.log(min2String(arr)); // Output: 2, Time Complexity: 0(n).

// Challenge: Find the maximum number in the array and filter out duplicate number.

// Write a function called 'maxFilter' that takes an array as an argument
// and returns the maximum number in the array then filters out duplicate numbers.

const bin = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const maxFilter = (arr) => {
    if(arr.length === 0) return null;
    let max = arr[0];

    for(let i = 0; i < arr.length; i++) {
        if(arr[i] > max) {
            max = arr[i];

            const filter = arr.filter((num, index) => {
                return arr.indexOf(num) === index;
            });
            console.log(filter); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
        }
    }
    return max;
};

console.log(maxFilter(bin)); // Output: 10, Time Complexity: 0(n).

// Challenge: Find the Second Largest Number in an Array

// Write a function called `findSecondLargest` that takes an array of numbers as an argument
// and returns the second largest number in the array.

// Example:
// Input: [1, 3, 7, 2, 5]
// Output: 5

function findSecondLargest(arr) {
    if(arr.length === 0) return null;
    let max = arr[0];
    let secondLargest = arr[1];

    for(let i = 0; i < arr.length; i++) {
        if(arr[i] > max) {
            secondLargest = max;
            console.log(secondLargest);
            max = arr[i];
            console.log(max);
        } else if(arr[i] > secondLargest) {
            secondLargest = arr[i];
        }
    }
    return secondLargest;
};

const x = [1, 3, 7, 2, 5];
console.log(findSecondLargest(x)); // Output: 5 Time Complexity: 0(n).

// Challenge: Find the Second Largest Number in an Array.

// Write a function called `secondLargest` that takes an array of numbers as an argument
// and returns the second largest number in the array.

const v = [22, 31, 44, 5, 66, 70, 90, 29, 98, 12, 50, 57, 25, 61, 98, 87, 54];

const secondLargest = (arr) => {
    if(arr.length === 0) return null;
    let max = arr[0];
    let secondLargest = arr[1];

    for(let i = 0; i < arr.length; i++) {
        if(arr[i] > max) {
            secondLargest = max;
            max = arr[i];
        } else if(secondLargest < arr[i]) {
            secondLargest = arr[i];
        }
    }
    return secondLargest;
}

console.log(secondLargest(v)); // Output: 98, Time Complexity: 0(n).

// Challenfe: Find the second smallest number in an array.

// Write a function called `SecondSmallest` that takes an array of numbers as an argument
//  and returns the second smallest number in the array.

const byte = [64, 32, 43, 22, 13, 26, 63, 77, 90, 98, 28, 78, 82, 91, 40, 21];

const SecondSmallest = (arr) => {
    if(arr.length == 0) return null;
    let min2 = arr[0];
    let min1 = arr[1];

    for(let i = arr.length; i > 0; i--) {
        if(min2 < arr[i]) {
            min1 = min2;
            min2 = arr[i];
        } else if(min1 < arr[i]) {
            min1 = arr[i];
        }
    }
    return min1;
}

console.log(SecondSmallest(byte)); // Output:  Time Complexity: 0(n).

// Chacllenge: Find the largest number in the array and remove duplicate values.

// Write a function `largeByte` that takes an array of numbers as an argument
// and returns the largest number in the array and removes duplicates.

const array = [1,2,3,4,5,6,7,8,9,9,8,7,6,5,4,3,2,1];

const largeByte = (arr) => {
    if(arr.length == 0) return null;
    let maxNum = -Number.MAX_VALUE;

    for(let i = 0; i < arr.length; i++) {
        if (arr[i] > maxNum) {
            maxNum = arr[i];
        }
    }

    const uniqueArr = [...new Set(arr)];
    return { maxNum, uniqueArr };
}
console.log(largeByte(array)); // Output: { maxNum: 9, uniqueArr: [1,2,3,4,5,6,7,8,9] }, Time Complexity: 0(n).

// Challenge: Find the 3 largest number in the array.

// Write a function called `thirdLargest` that takes an array of numbers as an argument
// and return the smallest number in the set.

const bit = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];

const thirdLargest = (arr) => {
    if(arr.length === 0) return null;
    let max = -arr[0];
    let sendMax = -arr[1];
    let thirdMax = -arr[2];

    for(let i = 0; i < arr.length; i++) {
        if(arr[i] > max) {
            thirdMax = sendMax;
            sendMax = max;
            max = arr[i];
        } else if(sendMax <= arr[i]) {
            thirdMax = sendMax;
            sendMax = arr[i];
        } else if(thirdMax <= arr[i]) {
            thirdMax = arr[i];
        }
    }

    return thirdMax;
};

console.log(thirdLargest(bit)); // Output: 14, Time Complexity: O(n).

// Write a function called `thirdMaxSum` that takes an array of numbers as an argument
// and returns the third largest number in the array.
const nms = [2,3,4,5,6,7,8,9];

const thirdMaxSum = (arr) => {
	if(arr.length === 0)  return null;
	const x = arr[0];
	const y = arr[1];
	const z = arr[2];

	for(let i = arr.length; i > 0; i--) {
		if(arr[i] > x) {
			z = y;
			y = x;
			x = arr[i];
		} else if(y < arr[i]) {
			z = y;
			y = arr[i];
		} else if(z < arr[i]) {
			z = arr[i];
		}
	}

	return z;
}

console.log(thirdMaxSum(nms)); // Output: 7 Time Complexity: 0(n);

// Write a function called "buff" that takes an array of numbers as an arguments
// and returns the all numbers as a buffer.
const buffers  = [1, 3, 5, 7, 8, 10];

const buff = (arr) => {
    if(arr.length === 0) return null;
    let x = arr[0];

    for(let i = 1; i < arr.length; i++) {
        if(arr[i] > x) {
            x = arr[i];
        }
    }
    return x;
}

console.log(buff(buffers)); // Output: 10, Time Complexity: O(n).

// Write a function called `dupes` that takes an array of numbers as an arg
// and returns the an array with no duplicate values.
const dupVal = [1,1,2,2,3,3,4,4,4,5,5,5,6,6,6,7,7,7,8,8,8,9,9,9];

const dupes = (arr) => {
    if(arr.length === 0) return null;

    const noDupes = [...new Set(arr)];
    return noDupes;
}

console.log(dupes(dupVal)); // Output:  Time Complexity: 0(n).

// Challenge: Find the 4th largest number in the array.

// Create Write a function called 'dub4' that takes an array as an argument
// and returns the 4th largest number in the array.
const dub = [1200, 4300, 5000, 2900, 1929, 68000, 3040, 7000, 4857, 8999, 2000];

const dub4 = (arr) => {
    if(arr.length === 0) return null;
    let d = arr[3];
    let c = arr[2];
    let b = arr[1];
    let a = arr[0];

    for(let i = 0; i < arr.length; i++) {
        if(arr[i] > a) {
            d = c;
            c = b;
            b = a;
            a = arr[i];
        } else if(b < arr[i]) {
            d = c;
            c = b;
            b = arr[i];
        } else if(c < arr[i]) {
            d = c;
            c = arr[i];
        } else if(d < arr[i]) {
            d = arr[i];
        }
    }
    return d;
}

console.log(dub4(dub)); // Output: 5000 Time Complexity: 0(n).

// Challenge: Find the highest pass grade in the array.

// Write a function called 'processGrades' that takes an array as an argument
// and return the highest passing grade and the failing grades below 50.

const processGrades = (arr) => {
    if(arr.length === 0) return null;
    let top = arr[0];
    let failed = arr[0];

    for(let i = 0; i< arr.length; i++) {
        if(arr[i] > top) {
            top = arr[i];
        }
    }

    failed.map((fails) => fails.filter((fails) => fails > 50));

    return top, failed;
}

let grades = [0, 55, 56, 34, 87, 77, 89, 90, 91, 98, 99, 45, 366];
console.log(processGrades(grades)); // Output: top: 99, failed [...] Time Complexity: 0(n).

// Challenge: Find the second largest number in the array and stringify it.

// Write a function called 'StringInt' that takes an array as an argument.
// and returns the the second largest number as a json string.

const dig = [1, 2, 3, 4, 5, 9, 8, 7, 6];

const stringInt = (arr) => {
    if (arr.length === 0) return null;
    let max = -Infinity;
    let secondMax = -Infinity;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            secondMax = max;
            max = arr[i];
        } else if (arr[i] > secondMax && arr[i] !== max) {
            secondMax = arr[i];
        }
    }

    return JSON.stringify(secondMax);
};

console.log(stringInt(dig)); // Output: "8"

// Challenge: Find the ages under 18 in the array.

// Write a function called 'filterAges' that takes an array as an argument
// and returns all the ages under 18.

let ages = [19, 22, 15, 6, 27, 18, 29, 10, 40, 29, 59, 21, 20, 14, 12, 19, 10];

const filterAges = (arr) => {
    if(arr.length === 0) return null;
    const u18 = [];

    arr.forEach((age) => age.filter((age) => age > 18).then(u18.push(age)));

    return u18;
}

console.log(filterAges(ages)); // Output: [] Time Complexity: 0(n).

// Challenge: Find and remove any duplicate numbers from the  array.

// Write a function called 'noDuplicates' that takes an array as an argument
// and return the new array with no duplicate integers.

const duplis = [1,1,1,1,1,2,2,2,2,3,3,3,3,3,4,4,4,4,12,12,12,12,9,8,4,2,5,6,7,7,8,9,5];

const noDuplicates = (arr) => {
    if(arr.length === 0) return null;

    const unique = [...new Set(arr)];

    return unique.toString('');
};

console.log(noDuplicates(duplis)); // Output: [] Time Complexity: 0(n).

// Challenge: IIncements all numbers in the array.

// Write a function called 'IIncrementHandler' that takes an array as argument
// and returns each age incremented with on.

const c = [12, 45, 78, 23, 56, 89, 34, 67, 90, 21];

const increment = (arr) => {
    if(arr.length === 0) return null;
    let a = [];

    let updatedIncr = arr.forEach((b) => { for(let i = 0; i < b.length; i++) {b[i]++} })
    a.concat(updatedIncr);

    return a;
}

console.log(increment(c)); // Output: [] Time Complexity: 0(n).

// Write afunction called "inc" that takes an array as ana argument and returns the 
// and returns the number incremented and multiplied by two.

const vl = [12, 45, 78, 23, 56, 89, 34, 67, 90, 21];

const inc = (arr) => {
    if(arr.length === 0) return null;
    
    return arr.map((char) => (char + 2) * 2)
}

console.log(inc(cl)); // Output: [] Time Complexity: 0(n).

// Challenge: Find all even numbers in the array.

// Write a function called 'findEven' that takes an array as an argument
// and returns the even numbers in the array. 💡💡 

const findEven = (arr) => {
    if (arr.length === 0) return null;
    let even = [];

    arr.forEach((x) => {
        if (x % 2 === 0) {
            even.push(x);
        }
    });

    return even;
};

const m = [1, 2, 3, 4, 5, 6, 7, 6, 5, 3, 3, 2, 1];
console.log(findEven(m)); // Output: [2, 4, 6, 6, 2], Time Complexity: O(n).

// Challenge: Find all uneven numbers in the array.

// Write a function called 'fundUneven' that takes an a rray as an argument
// and returns all uneven numbers in the array.
const n = [1,2,3,4,5,6,7,8,9,0,12];

const fundUneven = (arr) => {
    if(arr.length === 0) return null;
    const uneven = [];

    for(let i = arr.length - 1; i >= 0; i--) {
        if(arr[i] % 2 !== 0) {
            uneven.push(arr[i]);
        }
    }

    return uneven;
}

console.log(fundUneven(n)); // Output: [9, 7, 5, 3, 1], Time Complexity: O(n).

// Challenge: Find all even numbers in the array.

// Write a function called "findUneven" that takes an array as an argument
// and returns all uneven numbers without rem.

const value = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 15, 14, 13, 12, 20];

const findUneven = (arr) => {
    if (arr.length === 0) return null;
    const uneven = [];

    for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[i] % 2 !== 0) {
            uneven.push(arr[i]);
        }
    }

    return uneven;
};

console.log(findUneven(value)); // Output: [13, 15, 9, 7, 5, 3, 1], Time Complexity: O(n).

// Challenge: Find the 4th largest number in the array and check if it is even or uneven.

// Write a function called 'findlargestUneven' that takes an array of numbers
// and returns the 4th largers number and checks if is uneven in the array.
const k = [12,23,34,45,56,67,78,76,65,54,43,32,11,22,33,44,55,66,77,88,99,57,52,34,78,97];

const findlargestUneven = (arr) => {
    if(arr.length === 9) return null;
    const uneven = [];
    let w = arr[0];
    let x = arr[1];
    let y = arr[2];
    let z = arr[3];

    for(let i = 0; i < arr.length; i++) {
        if(arr[i] > w) {
            z = y;
            y = x;
            x = w;
            w = arr[i];
        } else if(x < arr[i] !== w) {
            z = y;
            y = x;
            x = arr[i];
        } else if(y < arr[i] !== x) {
            z = y;
            y = arr[i];
        } else if(z < arr[i] !== y) {
            z = arr[i];
        }
    }

    if(z % 1 !== 0) {
        console.log(`${z}: is an uneven number.`);
    } else {
        console.log(`${z}: is an even number`)
    }

    return uneven.push(JSON.stringify(z));
};

console.log(findlargestUneven(k)); // Output: 97: is an uneven number. Time Complexity: O(n).

// Challenge: Multiply each number in the array by 5.

// Write a function called 'productSum` thsat takes an array as an argumnet
// and returns the product of all numbers multiplied by 5 and converted to a json String.

const b = [12, 45, 78, 23, 56, 89, 34, 67, 90, 21];

const productSum = (arr) => {
    if(arr.length === 0) return null;
    const product = [];

    arr.forEach((num) => product.push(num * 5));

    return JSON.stringify(product);
}

console.log(productSum(b)); // Output: [60, 225, 390, 115, 280, 445, 170, 335, 450, 105], Time Complexity: O(n).

// Challenge: Divide all numbers in the array by 3, and return all even numbers.

// Write a function called'processNumbers' that takes an array as an argument
// and returns all even numbers numbers after dividing the initial values by 3.

const lem = [23, 1, 23, 22, 43, 25, 64, 253, 54, 23, 646, 75, 34, 75645, 3423, 6544, 2, 12];

const processNumbers = (arr) => {
    if (arr.length === 0) return null;
    const even = [];

    const updatedArr = arr.map((num) => num / 3);

    for (let i = 0; i < updatedArr.length; i++) {
        if (updatedArr[i] % 2 === 0) {

            even.push(updatedArr[i]);

        }
    }

    return even;
}

console.log(processNumbers(lem)); // Output: [21.333333333333332, 18, 2.6666666666666665, 4], Time Complexity: O(n).

// Challenge: Generate a list of random number in an array with a limit of 45.

// Write a variable that stores a list of randomly generated numbers up to 45.

const random = Array.from({ length: 45 }, () => Math.floor(Math.random() * 100));

// Write a function called ''removedDuplicates' that removes dupllicate valies from the array.
// and returns the transformed array.

const removedDuplicates = (arr) => {
    if (arr.length === 0) return null;

    const uniqueArr = [...new Set(arr)];

    return JSON.stringify(uniqueArr);
};

const e = [2, 2, 3, 4, 5, 3, 5, 4, 6, 4, 7, 8, 6, 8, 7, 8, 8, 8, 9, 6, 6, 4, 6, 4, 6, 8, 34, 34553, 55, 345, 634535];
console.log(removedDuplicates(e)); // Output: [2,3,4,5,6,7,8,9,34,34553,55,345,634535], Time Complexity: O(n).

// Challenge: Generate a list of numbers starting from 0 to 250.

// Create an array called 'set; that stores a list of integers..
const set = Array.from({ length: 250 }, (_, index) => index);

console.log(set); // Output: [0, 1, 2, ..., 249], Time Complexity: O(n).

// Challecnge: Find the sum of all odd numbers in an array.

// Write a function called `sumOddNumbers` that takes an array of numbers as an argument
// and returns the sum of all odd numbers in the array.

const sumOddNumbers = (arr) => {
    if (arr.length === 0) return 0;

    return arr.reduce((sum, num) => (num % 2 !== 0 ? sum + num : sum), 0);
};

const xb = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(sumOddNumbers(xb)); // Output: 25, Time Complexity: O(n).

// Create a variable that generates numbers up o 100.

const num100 = Array.from({ length: 100 }, (_, index) => index);

const arrRan = Array.from({ length: 4000 }, Math.floor(Math.random() * 4000));

// Challenge: Find the sum of all even numbers in the array.

// Write a function called 'sumEvenNumber' that takes an array as an arguments
// and returns the sum of all even numbers in the array.
const sumEvenNumber = (arr) => {
    if(arr.length === 0) return null;

    const even = arr.reduce((n, x) => (n % 2 === 0 ? x + n : x), 0);

    return even;
}

const rm = [2,3,4,2,2,31,65,2,3,2,48,70,5,5,6,7,6,4,53,64,587,79,5745,42,643464,35,64];
console.log(sumEvenNumber(rm)); // Output: 643688 Time Complexity: 0(n).

// Challenge: Generate rendom numbers with a maximum limit of 128.

// Write a variable called 'mf' of type array that generates random integers.

const nf = Array.from({ length: 128 }, () => Math.floor(Math.random() * 128));

console.log(ng); // Output: [array of 128 random integers] Time Complexity: 0(n).

// Challenge: Find the sum of every second number in the array and return their sum.

// Write a function called 'sumfOfSecondNumber' that takes an array as an argument
// and returns the sum of all second elements in the array.

const suns = [2, 4, 6, 8, 10, 9, 7, 5, 3, 1];

const sumfOfSecondNumber = (arr) => {
    if (arr.length === 0) return null;
    let sum = 0;

    for(let i = 1; i < arr.length; i += 2) {
        sum += arr[i];
    }

    return sum;
};

console.log(sumfOfSecondNumber(suns)); // Output: 20, Time Complexity: O(n).

// Challenge: Find the sim of all odd numbers in the array.

// Write a function called 'sumOddX' that takes an array as an argument
// and returns the sum pf all odd number in the array.

const xn = [8, 2, 3, 4, 9, 2, 1, 0, 3, 56, 32, 21, 3, 94, 88, 93, 3];

const sumOddX = (arr) => {
    if(arr.length === 0) return null;

    const uniqueArr = [...new set(arr)];
    const odd = uniqueArr.reduce((a, b) => (b % 2 !== 0 ? a * b : a), 0);

    return JSON(odd);
}

console.log(sumOddX(xn)); // Output: [126] Time Complexity: 0(n).

// Challenge: Find the fifth largest number in the array and multiply by 2.

// Write a function called 'fithSum' that takes an array as an argument
// and returns the fifth largest number in the array.

const gn = Array.from({ length: 65 }, () => Math.floor(Math.random() * 65));

const someNum = (arr) => {
    if(arr.length === 0) return null;
    const a = arr[0];
    const b = arr[1];
    const c = arr[2];
    const d = arr[3];
    const e = arr[4];

    const uniqueArr = [...new Set(arr)];

    for(let i = 0; i < uniqueArr.length; i++) {
        if(uniqueArr[i] > a) {
            e = d;
            d = c;
            c = b;
            b = a;
            a = uniqueArr[i];
        } else if(b < uniqueArr[i] !== a) {
            e = d;
            d = c;
            c = b;
            b = uniqueArr[i];
        } else if(c < uniqueArr[i] !== b) {
            e = d;
            d = c;
            c = uniqueArr[i];
        } else if(d < uniqueArr[i] !== c) {
            e = d;
            d = uniqueArr[i];
        } else if(e < uniqueArr[i] !== d) {
            e = uniqueArr[i];
        }
    }

    const finVal = e.map((num) => num * 2);
    return finVal;
}

console.log(someNum(gn)); // Output: [Fifth largest number multiplied by 2] Time Complexity: 0(n).

// Challeng: Find the product of all third numbers in the array.

// Write a function called `productOf3` that takes an array as an argument
// and returns the product of all third numbers in the array multiplied by three.

const vn = Array.from({ length: 266 }, (_, index) => index);

const productOfN = (arr) => {
    if (arr.length === 0) return null;
    let sum = 0;

    for (let i = 0; i < arr.length; i += 3) {
        sum += arr[i] * 3;
    }

    return `The product of n is: ${sum}`;
};

console.log(productOfN(vn)); // Output: The product of n is: [calculated sum], Time Complexity: O(n).

// Cha;;enge: Find all even numbers in the array.

// Write a function called 'processEven' that takes an array as an argument
// and returns all the even numbers contained in the array.
const top = Array.from({ length: 66 }, () => Math.floor(Math.random() * 66));

const processEven = (arr) => {
    if (arr.length === 0) return null;
    const even = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            even.push(arr[i]);
        }
    }

    return even;
};

console.log(processEven(top)); // Output: [array of even numbers], Time Complexity: O(n).

// Challenge: Find the sum of all odd and even numbers in the array.

// Write a function called 'oddEvenSum' that takes an array as an argument
// and returns the sum of all odd and even numbers in the array.
const gm = [44, 22, 55, 3, 21, 32, 43, 23, 24, 65, 76, 56, 86, 78, 66, 88, 78, 77, 666, 55, 43, 21, 45, 66];

const oddEvenSum = (arr) => {
    if (arr.length === 0) return null;

    const oddSum = arr.filter(num => num % 2 !== 0).reduce((sum, num) => sum + num, 0);
    const evenSum = arr.filter(num => num % 2 === 0).reduce((sum, num) => sum + num, 0);

    return { oddSum, evenSum };
};

console.log(oddEvenSum(gm)); // Output: { oddSum: 450, evenSum: 1362 }, Time Complexity: O(n).

// Challenge: Find the product and Kuotioent sum of all numbers in the array.

// Write a functionc called  'sumOfNumbers' that takes an array as an argument
// and returns the product of all even numbers and the kuotient of all odd numbers.
const sumInt = Array.from({ length: 344 }, () => Math.floor(Math.random() * 344));

const sumOfNumbers = (arr) => {
    if (arr.length === 0) return null;
    let product = 1; 
    let kuotient = 0;
    const even = [];
    const odd = [];

    const uniqueArr = [...new Set(arr)];

    for (let i = 0; i < uniqueArr.length; i++) {
        if (uniqueArr[i] % 2 === 0) {
            even.push(uniqueArr[i]);
            console.log(`Even Numbers are: ${even}`);

            product *= uniqueArr[i];
        } else {
            odd.push(uniqueArr[i]);
            console.log(`Odd Numbers are: ${odd}`);
            
            kuotient += uniqueArr[i] / 3;
        }
    }

    return { product, kuotient };
};

const valInt = [2, 4, 3, 6, 7, 4, 333, 55, 32, 21, 5, 6, 88, 98, 76, 43, 21, 23, 28, 76, 58, 34, 3, 99, 62, 27, 33, 28, 88, 73, 22, 34, 93];
console.log(sumOfNumbers(sumInt)); // Output: { product: ..., kuotient: ... }, Time Complexity: O(n).

// Challenge: Find the Fourth smallest number in the array and increment anually by 1.

// Write a function called 'nuggetFour' that takes an array as an argument
// and returns the fourth smallest number and checks if it is even or odd.
const ttn = Array.from({ length: 567 }, () => Math.floor(Math.random() * 567));

const nuggetFour = (arr) => {
    if (arr.length === 0) return null;

    const uniqueArr = [...new Set(arr)].sort((a, b) => a - b);

    const smallFour = uniqueArr[3];
    const annualIncrementation = smallFour * (new Date().getFullYear() + 1);

    return annualIncrementation;
};

console.log(nuggetFour(ttn)); // Output: [calculated value], Time Complexity: O(n log n).

// Challenge: Find the sum of all numbers in the array.

// Wrtie a function called 'm' that takes an array as an argument
// and returns the sum of all numbers in the array.
const y = Array.from({ length: 15 }, (_, index) => index);

const processNumsArr = (arr) => {
    if (arr.length === 0) return null;

    const results = arr.reduce((sum, num) => sum + num, 0);

    return results;
};

const valSum = [1, 2, 3, 4, 5, 6, 7, 6, 5, 4, 3, 2, 1];
console.log(processNumsArr(y)); // Output: [calcilated sum], Time Complexity: O(n).

// Challenge: Find the sum of all odd numbers in the array.

// Write a function called 'procNum' that takes an array as an argument
// and returns the sum of all odd numbers in the array.
const valueS = Array.from({ length: 450 }, () => Math.floor(Math.random() * 450));

const procNum = (arr) => {
    if (arr.length === 0) return null;

    const oddSum = arr.reduce((sum, num) => {
        if (num % 2 !== 0) {
            return sum + num;
        }
        return sum;
    }, 0);

    return `Sum of Odd Numbers is: ${oddSum}`;
};

console.log(procNum(valueS)); // Output: [], Time Complexity: 0(n).

// Challenge: Find the sum of the right and left halve in the array.

// Write a function called 'sumHalves' that takes an array as an argument
// and returns the sum of of each halve individually.
const halves = [47, 58, 50, 45, 65, 25, 15, 35, 52, 65, 66, 44, 22, 33, 11, 10, 100, 84, 82, 86, 84, 95, 98, 35, 96];

const sumHalves = (arr) => {
    if (arr.length === 0) return null;

    const mid = Math.floor(arr.length / 2);
    const leftSum = arr.slice(0, mid).reduce((sum, num) => sum + num, 0);
    const rightSum = arr.slice(mid).reduce((sum, num) => sum + num, 0);

    return { leftSum, rightSum };
};

console.log(sumHalves(halves)); // Output: { leftSum: ..., rightSum: ... }, Time Complexity: O(n).

// Challenge: find the sum of all halves in the array.

// Write a function called 'sumHalves2' that takes an array as an argument
// and returns the sum of both halves individually.
const numHalv = Array.from({ length: 150}, () => Math.floor(Math.random() * 150));

const sumHalves2 = (arr) => {
    if(arr.length === 0) return null;
    const mid = Math.floor(arr.length / 2);

    for(let i = 0; i < arr.length; i++) {
        if(i < mid) {
            leftsum += arr[i];
        } else {
            rightsum = arr[i];
        }
    }
}

console.log(sumHalves2(numHalv)); // Output: { leftSum: ..., rightSum: ... }, Time Complexity: O(n).

// Challenge: Find the Sum of both halves in the array.

// Write  afunction called 'sumBothHalves' that takes an array as an argument
// and returns the sum of both halves of the array.
const sm = [2, 4, 6, 8, 10, 1, 3, 5, 7, 9, 12, 13, 14, 15];

const sumBothHalves = (arr) => {
    if (arr.length === 0) return null;
    const mid = Math.floor(arr.length / 2);

    const leftSum = arr.slice(0, mid).reduce((sum, num) => sum + num, 0);
    const rightSum = arr.slice(mid).reduce((sum, num) => sum + num, 0);
    const sum = rightSum + leftSum;

    return { leftSum, rightSum, sum };
};

console.log(sumBothHalves(sm)); // Output: { leftSum: ..., rightSum: ..., sum: ... }, Time Complexity: O(n).

// Challenge: Find the sum of the right halve of the array.

// Write a function called 'greedyRightSum' that takes an array as an argument
// and returns the sum of the right halve. of the array.
const gr = Array.from({ length: 433 }, () => Math.floor(Math.random() * 433));

const greedyRightSum = (arr) => {
    if(arr.length === 0) return null;
    const mid = Math.floor(arr.length / 2);

    const rightSum = arr.forEach((num) => {
        if(num > mid) {
            const sum = 0;
            const odd = num.reduce((sum, num) => sum + num);
        }
    })

    return odd;
}

console.log(greedyRightSum(gr)); // Output: [], Time Complexity: 0(n).

// Challenge: Find the 10h largest number in the array and multiply by a factor of 10.

// Write a function called 'procX' that takes an array as argument
// and returns the 10th largest num in the array.
const lv = Array.from({ length: 55 }, (_, index) => index);

const procX = (arr) => {
    if (arr.length === 0) return null;

    const uniqueArr = [...new Set(arr)].sort((a, b) => b - a);

    const tenth = uniqueArr[9];
    const result = tenth * 10;

    return { tenth, result };
};

console.log(procX(lv)); // Output: { tenth: 45, result: 450 }, Time Complexity: O(n log n).

// Challenge: Find the su of even numbers in the array.

// Write a function called `handleEvenSum that takes an array as an argument
// and returns the sum of even numbers in the array.
const irn = Array.from({ length: 876}, () => Math.floor(Math.random() * 876));

const handleEvenSum = (arr) => {
    if (arr.length === 0) return null;
    let sum = 0;

    const uniqueArr = [...new Set(arr)];
    uniqueArr.forEach((num) => {
        if (num % 2 === 0) {
            sum += num;
        }
    });

    return sum;
};

console.log(handleEvenSum(irn)); // Output: [calculated sum], Time Complexity: O(n).

// Challenge: Find the product of odd numbers and the kuotient of even numbers in the array.

// Write a function called 'processSum' that takes n array as an argument
// and returns the product of odd numbers and the koutient of even numbers.
const g = Array.from({ length: 450 }, (_, index) => index);

const processNum = (arr) => {
    if (arr.length === 0) return null;
    let product = 1;
    let koutient = 0;

    const uniqueArr = [...new Set(arr)];
    uniqueArr.forEach((num) => {
        if (num % 2 === 0) {
            product *= num;
        } else {
            koutient += num / 3;
        }
    });

    return { product, koutient };
};

console.log(processNum(g)); // Output: { product: ..., koutient: ... }, Time Complexity: O(n).