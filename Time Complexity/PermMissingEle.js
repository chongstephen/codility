arr = [2,3,1,5];
// 4

//sort the arr
// set curr = arr[0];
// set next to be arr[i + 1]
// if (next - curr) > 1 return curr + 1

function permMissingEl(arr) {
  let sortedArr = arr.sort((a,b) => a - b);



  for(let i=0; i < sortedArr.length; i++){
    let curr = sortedArr[i];
    let next = sortedArr[i + 1];

    if(curr !== 1) {
      return 1;
    }

    if((next - curr) > 1){
      return curr + 1;
    }
  }
  return null;
}

// More efficient solution

function solution(arr) {
  const n = arr.length;
  const sum = (n + 1) * (n + 2) / 2;
  for (let i = 0; i < n; i++) {
      sum -= arr[i];
  }
  return sum;
}