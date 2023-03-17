function passingCars(arr) {
  let numZeros = 0;
  let numPairs = 0;

  for(let i=0; i < arr.length; i++) {
    if(arr[i] === 0) {
      numZeros++;
    } else {
      numPairs += numZeros;
      if(numPairs > 1000000000) {
        return -1;
      }
    }
  }
  return numPairs;
}