
function permutationChecker(arr){

  const set = new Set();
  const N = A.length;
  for (let i = 0; i < N; i++) {
    if (A[i] > N || A[i] < 1) {
      return 0;
    }
    if (set.has(A[i])) {
      return 0;
    }
    set.add(A[i]);
  }
  return set.size === N ? 1 : 0;
}

// The function takes an array A as its parameter and returns 1 if the array is a permutation and 0 otherwise.

// The function uses a set to keep track of the elements seen so far. It iterates over the array A and checks each element against the following conditions:

// If an element is greater than N or less than 1, it is out of range, so the function returns 0.
// If an element is already in the set, it is repeated, so the function returns 0.
// Otherwise, the element is added to the set.
// After iterating over the entire array, if the size of the set is equal to N, all the elements are present and unique, so the function returns 1. Otherwise, the function returns 0.