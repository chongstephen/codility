A[K] ≤ C[I] ≤ B[K]

A[1] ≤ C[4] ≤ B[4]
A[4] ≤ C[6] ≤ B[5]
A[5] ≤ C[7] ≤ B[9]
A[8] ≤ C[10] ≤ B[10]




//solution
// function solution(A, B, C) {
//   const N = A.length;
//   const M = C.length;

//   // Sort the nails in ascending order
//   C.sort((a, b) => a - b);

//   // Binary search for the minimum number of nails
//   let left = 0;
//   let right = M;
//   let result = -1;

//   while (left <= right) {
//     const mid = Math.floor((left + right) / 2);
//     const nailed = new Array(N).fill(false);
//     let count = 0;

//     for (let i = 0; i < M; i++) {
//       if (C[i] > B[N - 1]) {
//         break;
//       }

//       if (!nailed[N - 1]) {
//         let j = binarySearch(B, C[i]);
//         while (j < N && A[j] <= C[i]) {
//           if (!nailed[j]) {
//             nailed[j] = true;
//             count++;
//           }
//           j++;
//         }

//         if (count === N) {
//           result = i;
//           right = mid - 1;
//           break;
//         }
//       }
//     }

//     if (result === -1) {
//       left = mid + 1;
//     }
//   }

//   return result + 1;
// }

// function binarySearch(arr, target) {
//   let left = 0;
//   let right = arr.length - 1;

//   while (left <= right) {
//     const mid = Math.floor((left + right) / 2);
//     if (arr[mid] === target) {
//       return mid;
//     } else if (arr[mid] > target) {
//       right = mid - 1;
//     } else {
//       left = mid + 1;
//     }
//   }

//   return left;
// }