function dominator(arr) {
  let count = 0;
  let candidate = null;
  for(let i=0; i < arr.length; i++){
    if(count === 0) {
      candidate = arr[i];
      count++
    } else if(arr[i] === candidate) {
      count++
    } else {
      count--;
    }
  }
  if(arr.filter(el => el === candidate).length > n/2) {
    return arr.indexOf(candidate);
  } else {
    return -1;
  }
}