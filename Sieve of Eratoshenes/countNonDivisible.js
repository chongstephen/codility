// The code uses two loops: the first one to compute the frequency of each integer in A,
// and the second one to compute the number of non-divisors for each integer A[i] using the divisors of A[i] obtained by iterating from 1 to the square root of A[i].
// The time complexity of this solution is O(N * sqrt(A.max)), where A.max is the largest integer in the array.

// return arr of divisors
// stack -
// counter -
// function to check if divisor
// counter++ / divisor
// push the counter # into stack
// set counter = 0;

function nonDivis(arr){
  let length = arr.length;

  let freq = {};
  let result = [];

  for(let i=0; i < length; i++){
    let int = arr[i];
    if(freq[int]) {
      freq[int] += 1;
    } else {
      freq[int] = 1;
    }
  }

  for(let i=0; i < length; i++){
    let int = arr[i];
    let nonDiv = length;
    for(let j=1; j <= int; j++){
      if(int % j === 0){
        nonDiv -= freq[j] || 0;
        if(j * j !== int){
          nonDiv -= freq[int / j] || 0;
        }
      }
    }
    result.push(nonDiv)
  }
  return result
}



