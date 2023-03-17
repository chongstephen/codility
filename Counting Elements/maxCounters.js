


function maxCounters(arr, num){
  let counters = new Array(num).fill(0); // initialize all counters to 0
  let maxCounter = 0; // keep track of the current maximum value of any counter
  let lastMaxCounter = 0; // keep track of the maximum value of any counter in the previous max counter operation

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= 1 && arr[i] <= num) { // increase operation
      counters[arr[i]-1]++; // increase the corresponding counter
      if (counters[arr[i]-1] > maxCounter) { // update the maximum counter value
        maxCounter = counters[arr[i]-1];
      }
    } else if (arr[i] == num+1) { // max counter operation
      lastMaxCounter = maxCounter; // update the previous max counter value
    }
  }

  // set all counters to the maximum value of any counter in the previous max counter operation
  for (let i = 0; i < counters.length; i++) {
    counters[i] = Math.max(counters[i], lastMaxCounter);
  }

  return counters;
}