// First, we can create an array of tuples where each tuple contains the left and right coordinates of a disc.
// We can then sort this array based on the left coordinate of the discs. This sorting is important because it will help us to know which discs
// are overlapping at a given point in time.

// We then iterate over the sorted array and use a stack to keep track of the discs that intersect with each other.
// Whenever we encounter a new disc, we check if it overlaps with the discs in the stack. If it does, we add the number of discs
// in the stack to our count of intersecting pairs. We then push the new disc onto the stack. If the number of intersecting pairs
// exceeds 10,000,000 at any point in time, we can immediately return -1.

function numberOfDiscInter(arr) {
  const discs = arr.map((r, i) => [i - r, i + r])
  .sort((a, b) => a[0] - b[0]);
  let count = 0
  let stack = [];
  for (let [left, right] of discs) {
  while (stack.length > 0 && stack[stack.length - 1][1] >= left) {
  count += stack.length - 1;
  stack.pop();
  if (count > 10000000) return -1;
  }
  stack.push([left, right]);
  }
  return count;
}