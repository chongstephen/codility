// To solve this problem, we can use a binary search to find the maximum number of blocks that can be formed.
// We can first find all the peaks in the array and then iterate over all possible block sizes, starting from 1 and going up to the number of peaks in the array.
// For each block size, we check if it is possible to form that many blocks such that each block contains at least one peak.
// If it is possible, we update the maximum number of blocks found so far and continue searching for larger block sizes.

function peakSolution(arr) {
  const length = arr.length;
  const peaks = [];

  for (let i = 1; i < length - 1; i++) {
      if (arr[i] > arr[i-1] && arr[i] > arr[i+1]) {
          peaks.push(i);
      }
  }

  const numPeaks = peaks.length;

  if (numPeaks === 0) {
      return 0;
  }

  let minBlocks = 1;
  let maxBlocks = 1;

  while (minBlocks * minBlocks <= length) {
      if (length % minBlocks === 0) {
          const blockLength = length / minBlocks;
          let blockIndex = 0;
          let peakIndex = 0;

          while (blockIndex < minBlocks && peakIndex < numPeaks) {
              const blockStart = blockIndex * blockLength;
              const blockEnd = blockStart + blockLength - 1;

              if (peaks[peakIndex] >= blockStart && peaks[peakIndex] <= blockEnd) {
                  peakIndex++;
              }

              blockIndex++;
          }

          if (peakIndex === numPeaks) {
              maxBlocks = minBlocks;
          }
      }

      minBlocks++;
  }

  return maxBlocks;
}
