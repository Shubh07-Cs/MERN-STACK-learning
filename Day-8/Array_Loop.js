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