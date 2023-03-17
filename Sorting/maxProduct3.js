arr = [-3,1,2,-2,5,6]

function maxProductOfThree(arr) {
  arr.sort((a, b) => a - b);

  const n = arr.length;
  const positiveMax = arr[n - 1] * arr[n - 2] * arr[n - 3];
  const negativeMax = arr[0] * arr[1] * arr[n - 1];

  return Math.max(positiveMax, negativeMax);
}

console.log(maxProductOfThree(arr))