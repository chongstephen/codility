// arr = [1, 3, 6, 4, 1, 2] //5
// arr = [1, 3, 6, 4, 1, 2, 5, 8, 9] //7




function lonelyInt(A) {
  let N = A.length;

    // Modify the input array A in place
    for (let i = 0; i < N; i++) {
        let value = A[i];
        while (value > 0 && value <= N && A[value-1] != value) {
            let temp = A[value-1];
            A[value-1] = value;
            value = temp;
        }
    }

    // Find the first element that does not satisfy A[i] == i+1
    for (let i = 0; i < N; i++) {
        if (A[i] != i+1) {
            return i+1;
        }
    }

    // All positive integers up to N appear in the input array
    return N+1;
}

console.log(lonelyInt(arr))
