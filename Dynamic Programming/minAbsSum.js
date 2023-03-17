Initialize a variable min_val to infinity.
Generate all possible sequences S of N integers from the set {-1, 1}.
This can be done using a recursive function that generates all possible combinations of -1 and 1 of length N.
For each generated sequence S, compute val(A, S) using the formula given in the problem statement.
Update the min_val variable with the minimum value of val(A, S) obtained so far.
Return the final value of min_val.

function solution(arr) {
  // Initialize min_val to infinity
  let min_val = Infinity;

  // Recursive function to generate all possible sequences of -1 and 1
  function generateSequences(seq, index) {
    if (index === arr.length) {
      // Compute val(arr, seq) for the generated sequence S
      let sum = 0;
      for (let i = 0; i < arr.length; i++) {
        sum += arr[i] * seq[i];
      }
      let val = Math.abs(sum);

      // Update min_val if val is smaller
      if (val < min_val) {
        min_val = val;
      }
      return;
    }
    // Recursively generate all possible sequences
    seq[index] = -1;
    generateSequences(seq, index + 1);
    seq[index] = 1;
    generateSequences(seq, index + 1);
  }

  // Call the recursive function with an empty sequence
  generateSequences([], 0);

  // Return the minimum value of val(A, S)
  return min_val;
}