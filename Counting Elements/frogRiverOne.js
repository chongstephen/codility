let x = 5
let arr = [1,3,1,4,2,3,5,4]

function earliestTimeToCross(X, A) {
  const leaves = new Set();
  for (let i = 0; i < A.length; i++) {
    leaves.add(A[i]);
    if (leaves.size === X) {
      return i;
    }
  }
  return -1;
}

console.log(earliestTimeToCross(x,arr))