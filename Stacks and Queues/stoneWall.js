// The algorithm uses a stack to keep track of the heights of the previous sections of the wall.
// We start with an empty stack and zero blocks. For each section of the wall,
// we pop elements from the stack until we find a height that is less than or equal to the current height.
// This means that all previous sections with greater height can be covered by a single block. If the stack is empty or the top element is less than the current height,
// we add a new block to the wall and push the current height onto the stack.

// For the example input H = [8, 8, 5, 7, 9, 8, 7, 4, 8], the algorithm will proceed as follows:

// We start with an empty stack and zero blocks.
// The first section has height 8. We add it to the stack and increment the block count to 1.
// The second section also has height 8, which is already in the stack, so we do nothing.
// The third section has height 5, which is less than the maximum height 8 in the stack. We add a new block on top of the previous sections, so the block count is now 2.
// The fourth section has height 7, which is greater than the top element 5 in the stack. We add it to the stack and increment the block count to 3.
// The fifth section has height 9, which is greater than the top element 7 in the stack. We add it to the stack and increment the block count to 4.
// The sixth section has height 8, which is already in the stack, so we do nothing.
// The seventh section has height 7, which is less than the maximum height 9 in the stack. We add a new block on top of the previous sections, so the block count is now 5.
// The eighth section has height 4, which is less than the maximum height 9 in the stack. We add a new block on top of the previous sections, so the block count is now 6.
// The ninth section has height 8, which is greater than the top element 4 in the stack. We add it to the stack and increment the block count to 7.
// We have processed all sections of the wall, so we return the final block count of 7.
// Therefore, the minimum number of blocks needed to build the wall is 7.


function stoneWall(height){
  let stack = [];
  blocks = 0;

  for(let i=0; i < height.length; i++){
    while(stack.length >0 && stack[stack.length - 1] > height[i]) {
      stack.pop();
    }
    if(stack.length === 0 || stack[stack.length - 1] < height[i]){
      stack.push(height[i])
      blocks++;
    }
  }
  return blocks;
}