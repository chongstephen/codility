// The function loops through all the integers from 1 to the square root of N. For each integer i, it checks whether i is a factor of N by checking if N is divisible by i.
// If i is a factor of N, it increments the count by 1, and if i is not equal to the square root of N, it increments the count by 1 again to account for the corresponding factor, which is N/i.

// The reason for only looping up to the square root of N is that any factors greater than the square root of N must have a corresponding factor less than the square root of N.
// Therefore, if we find all the factors less than or equal to the square root of N, we can calculate the rest of the factors by dividing N by each of these factors.

// For example, when N is 24, the loop runs from i = 1 to i = 4. The factors of 24 are 1, 2, 3, 4, 6, 8, 12, and 24, and the count is 8.

Note that the function assumes that N is a positive integer. If N is not a positive integer, the behavior of the function is undefined.

function countFactors(num){
  let counter = 0;

  for(let i=0; i < Math.sqrt(num); i++){
    if(num % i === 0){
      counter++
      if(i !== Math.sqrt(num)){
        counter++;
      }
    }
  }

  return counter;
}


console.log(countFactors(16))
