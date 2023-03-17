function solution(N) {
  let binary = N.toString(2); // convert to binary string
  let maxGap = 0;
  let currentGap = 0;
  let started = false;

  for (let i = 0; i < binary.length; i++) {
      if (binary[i] === '1') { // found a 1
          if (currentGap > maxGap && started) { // check if gap is larger than previous max
              maxGap = currentGap;
          }
          currentGap = 0; // reset gap counter
          started = true; // flag to start counting gap
      } else if (started) { // found a 0 and counting gap
          currentGap++;
      }
  }

  return maxGap;
}
