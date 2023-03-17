// This function uses a stack to keep track of the downstream fish that haven't been eaten yet.
// We iterate over each fish in order, and if the fish is swimming upstream, we check if there are any downstream fish that it will eat.
// We do this by repeatedly popping downstream fish off the stack until we find a fish that is either larger than the current fish (and therefore won't be eaten),
// or until the stack is empty (meaning the current fish will eat all the downstream fish).
// If the stack is empty after this loop, it means the current fish is the largest fish in the downstream direction,
// and therefore it will survive. We increment the aliveFish counter in this case.

// If the current fish is swimming downstream, we simply push it onto the stack, since we don't know yet whether it will survive or not.
// At the end of the loop, we add the number of remaining fish on the stack to the aliveFish counter, since these fish will not be eaten by any upstream fish.

// This solution has a time complexity of O(N), since we only iterate over each fish once.
// The space complexity is also O(N), since the maximum size of the stack is N (when all fish are swimming downstream).

function solution(A, B) {
  const downstream = [];
  let aliveFish = 0;

  for (let i = 0; i < A.length; i++) {
    const currentFish = A[i];
    const direction = B[i];

    if (direction === 1) {
      downstream.push(currentFish);
    } else {
      while (downstream.length > 0) {
        const downstreamFish = downstream[downstream.length - 1];
        if (downstreamFish > currentFish) {
          break;
        } else {
          downstream.pop();
        }
      }
      if (downstream.length === 0) {
        aliveFish++;
      }
    }
  }

  return aliveFish + downstream.length;
}