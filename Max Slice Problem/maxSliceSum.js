//works for 2, question examples only show "pairs"

function maxSliceSum(arr) {
let result = 0;

for(let i=0; i < arr.length; i++){
  let pairA = arr[i];
  let pairB = arr[i +1];

  let currMax = pairA + pairB;
  if(currMax > result){
    result = currMax
  }
}

return result;
}



// all cases
// function solution(A) {
//   let maxEnding = A[0];
//   let maxSum = A[0];

//   for(let i = 1; i < A.length; i++) {
//       maxEnding = Math.max(A[i], maxEnding + A[i]);
//       maxSum = Math.max(maxSum, maxEnding);
//   }

//   return maxSum;
// }