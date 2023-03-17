// The function takes three arguments: K, M, and A. K is the number of blocks, M is the maximum value of any element in the array, and A is the array itself.
// The function returns the minimal large sum.
// The function first initializes the range for the binary search: low is set to 0, and high is set to the sum of all elements in the array.
// The variable result is initialized to high, which is the largest possible value for the minimal large sum.

// Then the function enters a while loop that continues as long as low is less than or equal to high.
// At each step, the function computes the middle point of the range and checks whether it is possible to divide
// the array into K blocks such that the maximal sum of any block is less than or equal to the current guess (which is the middle point of the range).
// To check this, the function uses a loop to iterate over all elements in the array.
// It adds each element to a current block and checks whether the sum of the current block exceeds the current guess.
// If it does, the function starts a new block. If the number of blocks used so far exceeds K, the loop breaks early since it's impossible to divide
// the array into K blocks such that the maximal sum of any block is less than or equal to the current guess.
// If the loop completes successfully without breaking,
// it means that it is possible to divide the array into K blocks such that the maximal sum of any block is less than or equal to the current guess.
// In that case, the function updates the result to the current guess and reduces the high end of the range.
// Otherwise, the function increases the low end of the range.

Finally, the function returns the result, which is the minimal large sum.



function solution(arr, split, size) {
  let low = 0;
  let high = arr.reduce((a,b) => a - b);
  let result = high;

  while(low <= high) {
    const mid = Math.floor((low + high) / 2);

    let blockSum = 0;
    let blockCount = 1;

    for(const block of arr){
      if(blockSum + block > mid) {
        blockSum = block;
        blockCount++;

        if(blockCount > size) {
          break;
        }
      } else {
        blockSum += block;
      }
    }
    if(blockCount <= size) {
      result = mid;
      high = mid - 1;
    } else {
      low = mid + 1
    }
  }
  return result;
}



