// The function loops through all the integers from 1 to the square root of N.
// For each integer i, it checks whether i is a factor of N by checking if N is divisible by i.
// If i is a factor of N, it calculates the corresponding factor by dividing N by i.
// It then calculates the perimeter of the rectangle whose sides are i and the corresponding factor and
// updates the value of minPerimeter if the perimeter is smaller than the current value of minPerimeter.

// The reason for only looping up to the square root of N is the same as in the previous problem
// - any factors greater than the square root of N must have a corresponding factor less than the square root of N,
// and we only need to consider the factors less than or equal to the square root of N.

// For example, when N is 30, the loop runs from i = 1 to i = 5. The factors of 30 are 1, 2, 3, 5, 6, 10, 15, and 30.
// The corresponding factors are 30, 15, 10, 6, 5, 3, 2, and 1, respectively.
// The perimeters of the rectangles with these sides are 62, 34, 26, 22, 22, 26, 34, and 62, respectively.
// The minimum perimeter is 22, so the function returns 22.

// Note that the function assumes that N is a positive integer. If N is not a positive integer, the behavior of the function is undefined.

function minPerimRec(num){
  let minPerimeter = Infinity;
  for (let i = 1; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      // i is a factor of num
      const factor = num / i;
      const perimeter = 2 * (i + factor);
      if (perimeter < minPerimeter) {
        minPerimeter = perimeter;
      }
    }
  }
  return minPerimeter;
}

