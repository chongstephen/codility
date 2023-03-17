function arrInversion(arr){
  let count = 0;

  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        count++;
        if (count > 1000000000) {
          return -1;
        }
      }
    }
  }

  return count;

}