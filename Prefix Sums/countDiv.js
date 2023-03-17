function solution(A, B, K) {
  let count = Math.floor(B/K) - Math.floor((A-1)/K);
  return count;
}


