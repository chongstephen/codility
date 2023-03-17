arr = [4,2,2,5,1,5,8]

helperAvg = a + b / arr.length;

hash map to store coordinates

function solution(A) {
  let minAvg = (A[0] + A[1]) / 2; // initialize the minimum average to the first slice
  let minIndex = 0; // initialize the starting position of the minimum average slice
  for (let i = 0; i < A.length - 2; i++) {
  let avg2 = (A[i] + A[i+1]) / 2; // calculate the average of the slice (i, i+1)
  let avg3 = (A[i] + A[i+1] + A[i+2]) / 3; // calculate the average of the slice (i, i+2)
  let currMinAvg = Math.min(avg2, avg3); // take the minimum of the two averages
  if (currMinAvg < minAvg) { // if the current minimum average is less than the overall minimum average
  minAvg = currMinAvg; // update the overall minimum average
  minIndex = i; // update the starting position of the minimum average slice
  }
  }
  // check the last slice of length 2
  let lastAvg = (A[A.length-2] + A[A.length-1]) / 2;
  if (lastAvg < minAvg) {
  minIndex = A.length - 2;
  }
  return minIndex;
  }


