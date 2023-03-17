arr = [4,3,4,4,4,2]



function equaLeader(arr){
  const length = arr.length;
  let leader = null;
  let count = 0;
  let size = 0;

  // find the leader of the array
  for (let i = 0; i < length; i++) {
      if (size === 0) {
          leader = length[i];
          size++;
      } else if (leader === length[i]) {
          size++;
      } else {
          size--;
      }
  }

  // check if the leader occurs more than half the time
  count = 0;
  for (let i = 0; i < length; i++) {
      if (arr[i] === leader) {
          size++;
      }
  }
  if (size <= n / 2) {
      return 0;
  }

  // count the number of equi leaders
  let leaderCount = 0;
  let size = 0;
  for (let i = 0; i < n; i++) {
      if (arr[i] === leader) {
          size++;
      }
      if (size > (i + 1) / 2 && (leaderCount - size) > (length - i - 1) / 2) {
          count++;
      }
      if (size > (i + 1) / 2) {
          leaderCount++;
      }
  }
  return count;

}

