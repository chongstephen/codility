// We first find all the peaks and store their indices in an array.
// If there are no peaks, we return 0 because we can't set any flags.
// We then set the maximum possible number of flags to be the square root of the length of the array, which is the maximum distance between any two indices.
// We start with this number of flags and try to decrease it until we find a valid solution.
// In each iteration of the while loop, we try to set the current number of flags.
// We start by setting a flag at the first peak and then iterate through the remaining peaks, setting flags at the next available peak that is at least k distance away.
// If we can set all the flags, we update the result to be the current number of flags.
// We continue decreasing the number of flags until we find the maximum number of flags that can be set.
// Finally, we return the result.




function flags(arr){
  const peaks = [];

  for(let i=1; i < arr.length; i++){
    if(arr[i] > arr[i-1] && arr[i] > arr[i+1]) {
      peaks.push(i);
    }
  }

  if(peaks.length === 0) {
    return peaks;
  }

  let maxFlags = Math.cein(Math.sqrt(arr.length));
  let result = 1;

  while(maxFlags > 0) {
    let counter = 1;
    let lastPeak = peaks[0];

    for(let i=1; i < peaks.length && count < maxFlags; i++){
      if(peaks[i] - lastPeak >= maxFlags) {
        counter++
        lastPeak = peaks[i];
      }
    }
    result = Math.max(result, counter);
    maxFlags--;
  }
  return result
}

