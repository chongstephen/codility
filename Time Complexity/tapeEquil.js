// Initialize two variables, sumLeft and sumRight, to zero.
// Calculate the sum of all elements in the input array and store it in sumRight.
// Initialize a variable, minDiff, to Infinity.
// Iterate over the input array from index 0 to index N-2 (since we need at least one element on the left side):
// a. Add the current element to sumLeft.
// b. Subtract the current element from sumRight.
// c. Calculate the absolute difference between sumLeft and sumRight.
// d. If the absolute difference is less than minDiff, update minDiff.
// Return minDiff.



function tapeEquil(arr) {
const n = arr.length;
let sumLeft = 0;
let sumRight = arr.reduce((a, b) => a + b, 0);
let minDiff = Infinity;

for (let i = 0; i < n - 1; i++) {
    sumLeft += arr[i];
    sumRight -= arr[i];
    const diff = Math.abs(sumLeft - sumRight);
    if (diff < minDiff) {
        minDiff = diff;
    }
}

return minDiff;
}

