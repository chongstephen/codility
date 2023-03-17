let arr = [9,9,3,5,5,3,11]
//11
function oddOccuranceArr(A) {
  let hashTable = {};
  for (let i = 0; i < A.length; i++) {
    if (hashTable[A[i]]) {
      hashTable[A[i]]++;
    } else {
      hashTable[A[i]] = 1;
    }
  }
  for (let element in hashTable) {
    if (hashTable[element] % 2 !== 0) {
      return parseInt(element);
    }
  }
}

console.log(oddOccuranceArr(arr));