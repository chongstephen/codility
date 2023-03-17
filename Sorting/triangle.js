// arr[point1] + arr[point2] > arr[point3],
// arr[point2] + arr[point3] > arr[point1],
// arr[point3] + arr[point1] > arr[point2].


// arr[0] = 10
// arr[2] = 5
// arr[4] = 8

// for(let i=0; i < ){


// if(arr[p1] + arr[p2] > arr[p3] &&
//   arr[p2] + arr[p3] > arr[p1] &&
//   arr[p3] + arr[p1] > arr[p2]) {
//     return 1
//   } else {
//     return 0
//   }
// }


function triangle(arr) {
  let sortedArr = arr.sort((a,b) => a - b);

  for(let i=0; i < sortedArr.length -2; i++){
    let p = arr[i];
    let q = arr[i+1];
    let r = arr[i+2];

    if(p + q > r && q + r > p && r + p > q) {
      return 1
    }
  }
  return 0
}