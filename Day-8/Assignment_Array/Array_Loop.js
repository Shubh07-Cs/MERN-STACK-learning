const array = [2, 4, 5, 6, 8, 9];

// Remove the first element
console.log("Original array:", array);
console.log("Removed element:", array.shift()); // Removes the first number
console.log("Array after shift:", array);

// Array length
console.log("Array length:", array.length);

// Array toString()
console.log("Array toString():", array.toString());

// Array at()
console.log("Element at index 2:", array.at(2)); // Access element at index 2
console.log("Element at index -1 (last):", array.at(-1)); // Access last element

// Array join()
console.log("Array joined with space:", array.join(' ')); // Join with space
console.log("Array joined with no separator:", array.join('')); // Join with no separator

// Array pop()
console.log("Removed last element:", array.pop()); // Removes last number
console.log("Array after pop:", array);

// Array push()
array.push(23); // Adds element at last index
console.log("Array after push(23):", array);

// Array unshift()
array.unshift(1); // Adds element at the beginning
console.log("Array after unshift(1):", array);

// Array splice()
array.splice(1, 1); // Removes 1 element at index 1
console.log("Array after splice(1, 1):", array);

// Array slice()
const slicedArray = array.slice(1, 3); // Slices from index 1 to 3 (not inclusive)
console.log("Sliced array (1 to 3):", slicedArray);

// Array concat()
const newArray = array.concat([100, 200]); // Concatenates another array
console.log("Array after concat([100, 200]):", newArray);

// Array flat()
const nestedArray = [array, [10, 20]];
const flatArray = nestedArray.flat(); // Flattens the nested array
console.log("Flattened array:", flatArray);

// Array copyWithin()
const copyWithinArray = array.copyWithin(1, 0, 2); // Copies elements within the array
console.log("Array after copyWithin(1, 0, 2):", copyWithinArray);

// Array fill()
const filledArray = new Array(5).fill(0); // Creates an array filled with 0
console.log("Filled array:", filledArray);

//---------------------------------------------------------------------------------------------------------


// Search Methods
// Array includes()
console.log("Array includes 5:", array.includes(5)); // Checks if 5 is in the array
console.log("Array includes 10:", array.includes(10)); // Checks if 10 is in the array

// Array indexOf()
console.log("Index of 6:", array.indexOf(6)); // Returns the index of 6
console.log("Index of 10:", array.indexOf(10)); // Returns -1 if not found

// Array find()
const foundElement = array.find(num => num > 5); // Finds the first element greater than 5
console.log("First element greater than 5:", foundElement);

// Array filter()
const filteredArray = array.filter(num => num > 5); // Filters elements greater than 5
console.log("Elements greater than 5:", filteredArray);


//-------------------------------------------------------------------------------------------
// Sort Methods
// Array sort()
const sortedArray = [...array].sort((a, b) => a - b); // Sorts the array in ascending order
console.log("Sorted array:", sortedArray);

// Array reverse()
const reversedArray = [...array].reverse(); // Reverses the array
console.log("Reversed array:", reversedArray);


//-------------------------------------------------------------------------------------------
// Iteration Methods
// Array forEach()
console.log("Using forEach to print elements:");
array.forEach((item, index) => {
    console.log(`Index ${index}: ${item}`);
});

// Array map()
const doubledArray = array.map(num => num * 2); // Creates a new array with doubled values
console.log("Doubled values:", doubledArray);

// Array some()
const hasEven = array.some(num => num % 2 === 0); // Checks if any element is even
console.log("Array has even number:", hasEven);

// Array every()
const allEven = array.every(num => num % 2 === 0); // Checks if all elements are even
console.log("All elements are even:", allEven);

// Array reduce()
const sum = array.reduce((acc, num) => acc + num, 0); // Sums all elements in the array
console.log("Sum of elements:", sum);
